'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Modules', {
      idModule: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id_module'
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('Modules');
  }
};
