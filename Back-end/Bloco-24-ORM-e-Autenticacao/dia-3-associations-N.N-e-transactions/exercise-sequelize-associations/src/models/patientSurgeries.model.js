const patientSurgerieModel = (sequelize, _Datatypes) => {
  const PatientSurgerie = sequelize.define('PatientSurgerie', {}, {
    timestamps: false,
    tableName: 'Patient_surgeries',
    underscored: true,
  });

  PatientSurgerie.associate = (models) => {
    models.Patient.belongsToMany(models.Surgerie, {
      foreignKey: 'patientId',
      otherKey: 'surgeryId',
      as: 'surgeries',
      through: PatientSurgerie,      
    });

    models.Surgerie.belongsToMany(models.Patient, {
      foreignKey: 'surgeryId',
      otherKey: 'patientId',
      as: 'patients',
      through: PatientSurgerie,
    });
  };

  return PatientSurgerie;
};

module.exports = patientSurgerieModel;