var models  = require('../models');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
var router  = express.Router();

router.get('/cad', function(req, res) {
  res.render('formTurmas.ejs');
});

router.post('/submit_new', function(req, res) {
	
	var nome = req.body.nome;
	var patrono = req.body.patrono;
	var paraninfo = req.body.paraninfo;
	var curso = req.body.curso;
	var instituicao = req.body.instituicao;
	var reitor = req.body.reitor;
	var coordenador = req.body.coordenador;
	var vice_coordenador = req.body.vice_coordenador;
	var foto = req.body.foto;
    
	models.turma.create({nome, patrono, paraninfo, curso, instituicao, reitor, coordenador, vice_coordenador, foto}).
	then(function()
	{
        console.log(req.body);
		res.send(nome, patrono, paraninfo, curso, instituicao, reitor, coordenador, vice_coordenador, foto);
	});
	
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