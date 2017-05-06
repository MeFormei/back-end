var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/cad', function(req, res) {
  res.render('form.ejs');
});

/*router.post('/submit_new', function(req, res, next) {
	
	var nome = req.body.nome;
	var frase = req.body.frase;
	var enfase = req.body.enfase;
	var turma = req.body.turma;
	var foto = req.body.foto;
	
	models.aluno.create({nome, frase, enfase, turma, foto}).
	then(function()
	{
		res.send(nome, frase, enfase, turma, foto);
	});
	
});*/


router.post('/submit_new', function(req, res, next) {
  models.aluno.create({nome: req.body.nome, frase : req.body.frase, enfase : req.body.enfase, turma : req.body.turma, foto : req.body.foto}).
  then(function()
  {
      res.send(req.body.nome, req.body.frase, req.body.enfase, req.body.turma, req.body.foto);
	  res.redirect('/');
	  //res.redirect('/get' + nome + '/' + frase + '/' + enfase + '/' + turma + '/' + foto);
  }); 
});




router.get('/get/:nome/:frase/:enfase/:turma/:foto', function(req, res) { // para testar
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
  models.aluno.findAll({attributes: ['nome' ,'frase', 'enfase', 'turma', 'foto']}).
  then(function(aluno)
  {
      res.send(aluno);  
  });  
});

module.exports = router;