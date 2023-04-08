'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Autors', [{
          nome: 'Jose silvio',
          cpf: "15120305102",
          data_nascimento: "2004-05-03",
          createdAt: new Date(),
          updatedAt: new Date()
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {


      await queryInterface.bulkDelete('Autors', null, {});
  }
};
