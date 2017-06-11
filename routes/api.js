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


//renderiza o formulario de entrada do aluno
router.get('/aluno/nova', function(req, res) {
  models.turma.findAll().
  then(function(turma)
  { 
      res.render("formAlunos.ejs", { turmas: turma}); 
  });
});


//metodo post (grava no DB usando o formulario de entrada)
router.post('/aluno/nova', upload.single('foto') , function(req, res) {
	
	var nome = req.body.nome;
	var frase = req.body.frase;
	var enfase = req.body.enfase;
	var turma = req.body.turma;
    
	models.aluno.create({nome, frase, enfase, turma, foto}).
	then(function()
	{
		res.send(nome, frase, enfase, turma, foto);
	});
});

router.get('/api/v1/turmas/:id1/alunos/:id2', function(req, res) {    
  models.aluno.findAll({ where: { turma: req.params.id1, id: req.params.id2}}).
  then(function(aluno)
  {
      res.send(aluno);  
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

//lista todos os alunos
router.get('/alunos', function(req, res) {
  models.aluno.findAll({attributes: ['nome' , 'frase', 'turma', 'foto']}).
  then(function(aluno)
  {
      res.send(aluno);  
  });  
});

//----------------------------------------------------------- form turma ---------------------------------------------------------------------------------//


//renderiza o formulario de entrada
router.get('/turma/nova', function(req, res) {
  res.render('formTurmas.ejs');
});

router.get('/api/v1/turmas/:id', function(req, res) {    
  models.turma.findAll({ where: { id: req.params.id}}).
  then(function(turma)
  {
      res.send(turma);  
  });  
});


//metodo post (grava no DB usando o formulario de entrada)
router.post('/turma/nova', upload.single('foto') ,function(req, res) {
  
  var nome = req.body.nome;
  var patrono = req.body.patrono;
  var paraninfo = req.body.paraninfo;
  var curso = req.body.curso;
  var instituicao = req.body.instituicao;
  var reitor = req.body.reitor;
  var coordenador = req.body.coordenador;
  var vice_coordenador = req.body.vice_coordenador;
    var musica = req.body.musica;
    
    
  models.turma.create({nome, patrono, paraninfo, curso, instituicao, reitor, coordenador, vice_coordenador, musica, foto}).
  then(function()
  {
        console.log(req.body);
    res.send(nome, patrono, paraninfo, curso, instituicao, reitor, coordenador, vice_coordenador);
  });
  
});

//lista todas as turmas
router.get('/api/v1/turmas', function(req, res) {
  models.turma.findAll().
  then(function(turma)
  {
      res.setHeader('Access-Control-Allow-Origin','*');
      res.send(turma);  
  });
});

module.exports = router;