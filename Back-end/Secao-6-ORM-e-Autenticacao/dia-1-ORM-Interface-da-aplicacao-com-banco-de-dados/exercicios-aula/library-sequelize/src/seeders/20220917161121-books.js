'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => await queryInterface.bulkInsert('Books', 
    [
      {
        title: 'Xablau',
        author: 'Gus',
        page_quantity: 999,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'RONALDO',
        author: 'Wolf',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Async se coda',
        author: 'Trybe Students',
        page_quantity: 100,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Boa tarde turma 21',
        author: 'Let',
        page_quantity: 999,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),  

  down: async (queryInterface) => queryInterface.bulkDelete('Books', null, {}),
};
