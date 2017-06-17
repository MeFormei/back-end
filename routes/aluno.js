var models  = require('../models');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var multer  = require('multer');
var md5 = require('md5');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
var router  = express.Router();

var foto;

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../uploads/img')
  },
  filename: function (req, file, cb) {
      var name = file.originalname;
      var ext = name.slice(name.lastIndexOf('.'), name.length); 
      var hash = md5(name + Date.now());
      cb(null, hash + ext);
      foto = "img/" + hash + ext;  
  }
});

var upload = multer( { storage: storage } );


//renderiza o formulario de entrada
router.get('/nova', function(req, res) {
  models.turma.findAll().
  then(function(turma)
  { 
      res.render("formAlunos.ejs", { turmas: turma}); 
  });
});


//metodo post (grava no DB usando o formulario de entrada)
router.post('/nova', upload.single('foto') , function(req, res) {
	
	var nome = req.body.nome;
	var frase = req.body.frase;
	var enfase = req.body.enfase;
	var turma = req.body.turma;
    
	models.aluno.create({nome, frase, enfase, turma, foto}).
	then(function()
	{
        console.log("deu certo");
		res.send(nome, frase, enfase, turma, foto);
	});
});

//lista todos os alunos da turma (id)
router.get('/api/v1/turmas/:id/alunos', function(req, res) {	
  models.aluno.findAll({ where: { turma: req.params.id}}).
  then(function(aluno)
  {
      res.send(aluno);  
  });  
});



//coisas adicionais (não essenciais)---

//cria manualmente um aluno
router.get('/get/:nome/:frase/:enfase/:turma/:foto', function(req, res) {
  models.aluno.create({ nome: req.params.nome, frase: req.params.frase, enfase: req.params.enfase, turma: req.params.turma, foto: req.params.foto}).
  then(function()
  {
      res.send(req.params.nome);  
  });  
});

//lista todos os alunos
router.get('/', function(req, res) {
  models.aluno.findAll({attributes: ['nome' , 'frase', 'turma', 'foto']}).
  then(function(aluno)
  {
      res.send(aluno);  
  });  
});


module.exports = router;