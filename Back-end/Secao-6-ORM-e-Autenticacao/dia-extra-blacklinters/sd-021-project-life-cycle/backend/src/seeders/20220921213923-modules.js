'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Modules', [
      {
        name: 'Fundamentos',
      },
      {
        name: 'Backend',
      },
      {
        name: 'Frontend',
      },
      {
        name: 'C da computacao',
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Modules', null, {});
  }
};
