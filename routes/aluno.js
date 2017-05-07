var models  = require('../models');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
var router  = express.Router();


router.get('/cad', function(req, res) {
  res.render('formAlunos.ejs');
});

router.post('/submit_new', function(req, res) {
	
	var nome = req.body.nome;
	var frase = req.body.frase;
	var enfase = req.body.enfase;
	var turma = req.body.turma;
	var foto = req.body.foto;
    
	models.aluno.create({nome, frase, enfase, turma, foto}).
	then(function()
	{
        console.log(req.body);
		res.send(nome, frase, enfase, turma, foto);
	});
	
});


router.get('/get/:nome/:frase/:enfase/:turma/:foto', function(req, res) {
  models.aluno.create({ nome: req.params.nome, frase: req.params.frase, enfase: req.params.enfase, turma: req.params.turma, foto: req.params.foto}).
  then(function()
  {
      res.send(req.params.nome);  
  });  
});

router.get('/:nome', function(req, res) {
  models.aluno.findAll().
  then(function(aluno)
  {
      res.send(aluno);  
  });  
});

router.get('/', function(req, res) {
  models.aluno.findAll({attributes: ['nome' , 'frase', 'turma', 'foto']}).
  then(function(aluno)
  {
      res.send(aluno);  
  });  
});

module.exports = router;