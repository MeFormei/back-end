'use strict';

module.exports = function(sequelize, DataTypes) {
    
  var aluno = sequelize.define("aluno", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nome: { type: DataTypes.STRING},
    frase: { type: DataTypes.STRING},
    enfase: { type: DataTypes.STRING},
    turma: { type: DataTypes.STRING},
    foto: { type: DataTypes.STRING}
  });

  return aluno;
};