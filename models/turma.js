'use strict';

module.exports = function(sequelize, DataTypes) {
    
  var turma = sequelize.define("turma", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nome: { type: DataTypes.STRING},
    patrono: { type: DataTypes.STRING},
    paraninfo: { type: DataTypes.STRING},
    curso: { type: DataTypes.STRING},
    instituicao: { type: DataTypes.STRING},
    reitor: { type: DataTypes.STRING},
    coordenador: { type: DataTypes.STRING},
    vice_coordenador: { type: DataTypes.STRING},
    musica: { type: DataTypes.STRING},
    foto: { type: DataTypes.STRING}
  });

  return turma;
};