'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Employees', [
      {
        name: 'Eduard Silveir',
        role: 'teacher',
        email: 'eduard.silveira@blacklinters.com',
        password: '123456',
      },
      {
        name: 'Sara After',
        role: 'admin',
        email: 'sa.ra@blacklinters.com',
        password: '123456',
      },
      {
        name: 'Ronnald Between',
        role: 'admin',
        email: 'ronnald@blacklinters.com',
        password: '123456',
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Employees', null, {});
  }
};
