var models  = require('../models');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
var router  = express.Router();

router.get('/', function(req, res) {
  models.turma.findAll({attributes: ['foto'], raw: true}).
  then(function(aluno)
  {
       var fotos = [];
       for(var i = 0; i < aluno.length; i++)
       {
           fotos.push(aluno[i]['foto']);
       }
      res.render('index.ejs', { images: fotos });  
  }); 
});

module.exports = router;