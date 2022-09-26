'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Deliverys', {
      idDelivery: {
        type: Sequelize.INTEGER,
        field: 'id_delivery',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      idProject: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'id_project',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Projects',
          key: 'id_project'
        },
      },
      idStudent: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'id_student',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Students',
          key: 'id_student',
        },
      },
      grade: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      deliveryDate: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'delivery_date',        
      },	
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('Deliverys');
  }
};
