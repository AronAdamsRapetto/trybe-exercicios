'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Projects', [
      {
        name: 'docker-to-do-list',
        description: 'Docker ToDo List',
        requirements: 12,
        id_module: 3,
      },
      {
        name: 'all-for-one',
        description: 'All For One',
        requirements: 27,
        id_module: 3,
      },
      {
        name: 'one-for-all',
        description: 'One For All',
        requirements: 11,
        id_module: 3,
      },
      {
        name: 'star-war',
        description: 'Star Wars Planets Search',
        requirements: 11,
        id_module: 2,
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Projects', null, {});    
  }
};
