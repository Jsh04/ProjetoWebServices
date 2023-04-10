'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livros extends Model {

    static associate(models) {
      Livros.belongsTo(models.Autor, {
        foreignKey: "autor_id",
      });
    }
  }
  Livros.init({
    nome_livro: DataTypes.STRING,
    num_paginas: DataTypes.INTEGER,
    data_lancamento: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Livros',
  });
  return Livros;
};