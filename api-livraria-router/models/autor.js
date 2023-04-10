'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autor extends Model {
    static associate(models) {
      Autor.hasMany(models.Livros, {
        foreignKey: "autor_id",
      });
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