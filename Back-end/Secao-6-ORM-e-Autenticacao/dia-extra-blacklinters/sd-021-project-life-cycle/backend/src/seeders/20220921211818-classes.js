'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Classes', [
      {
        name: '18-A',
        alias: 'Turma 18-A'
      },
      {
        name: '21-A',
        alias: 'BlackJacks'
      },
      {
        name: '21-B',
        alias: 'Inimigos do Lint'
      },
      {
        name: '18-B',
        alias: 'Turma 18-B'
      },
      {
        name: '10',
        alias: 'Trybe-X'
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Classes', null, {});
  }
};
