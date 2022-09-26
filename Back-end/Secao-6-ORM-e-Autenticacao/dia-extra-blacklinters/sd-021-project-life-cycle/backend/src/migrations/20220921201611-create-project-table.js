'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
      idProject: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id_project',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
      },
      requirements: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      idModule: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'id_module',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Modules',
          key: 'id_module',
        },
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('Projects');
  }
};
