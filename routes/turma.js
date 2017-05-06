var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/cadastro', function(req, res) {
  res.render('cadastroTurma.ejs');
});

router.post('/cadastra', function(req, res) {
	
  var nametur = 'turma 1';  
  
  models.turma.create({ nametur}).
  then(function()
  {
      res.send(req.body.nome);
	  
  }); 
  res.redirect('/');	
});

router.get('/get/:turma', function(req, res) {
  models.turma.create({ nome: req.params.turma}).
  then(function()
  {
      res.send(req.params.nome);  
  });  
});

router.get('/', function(req, res) {
  models.turma.findAll().
  then(function(turma)
  {
      res.send(turma);  
  });
});

module.exports = router;