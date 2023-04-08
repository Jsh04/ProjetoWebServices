'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autor extends Model {
    static associate(models) {
      // define association here
    }
  }
  Autor.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    data_nascimento: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Autor',
  });
  return Autor;
};