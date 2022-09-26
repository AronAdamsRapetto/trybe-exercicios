const patientModel = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    patientId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },    
    fullname: DataTypes.STRING,
    planId: DataTypes.INTEGER,
  },
  {
    underscored: true,
    timestamps: false,
    tableName: 'Patients',
  });

  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan, {
      foreignKey: 'planId',
      as: 'plan',
    });
  };

  return Patient;
};

module.exports = patientModel;