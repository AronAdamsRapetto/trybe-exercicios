const deliveryModel = (sequelize, DataTypes) => {
  const Delivery = sequelize.define('Delivery', {
    idDelivery: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idProject: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    idStudent: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    grade: DataTypes.DOUBLE,
  },
  {
    underscored: true,
    tableName: 'Deliverys',
    createdAt: 'delivery_date',
    updatedAt: false,
  });

  Delivery.associate = (models) => {
    models.Project.belongsToMany(models.Student, {
      foreignKey: 'idProject',
      as: 'students',
      otherKey: 'idStudent',
      through: Delivery,
    });

    Delivery.belongsTo(models.Project, {
      foreignKey: 'idProject',
      as: 'project',
    });

    models.Student.belongsToMany(models.Project, {
      foreignKey: 'idStudent',
      as: 'projects',
      otherKey: 'idProject',
      through: Delivery,
    });

    Delivery.belongsTo(models.Student, {
        foreignKey: 'idStudent',
        as: 'student',
    });
  };

  return Delivery;
};

module.exports = deliveryModel;