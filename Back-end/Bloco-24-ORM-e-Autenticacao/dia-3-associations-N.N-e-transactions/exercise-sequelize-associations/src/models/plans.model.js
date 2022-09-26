const planModel = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    planId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE
  },
  {
    underscored: true,
    timestamps: false,
    tableName: 'Plans',
  });

  Plan.associate = (models) => {
    Plan.hasMany(models.Patient, {
      foreignKey: 'planId',
      as: 'patients',
    });
  };

  return Plan;
};

module.exports = planModel;