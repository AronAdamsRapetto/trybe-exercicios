const surgeriesModel = (sequelize, DataTypes) => {
  const Surgerie = sequelize.define('Surgerie', {
    surgeryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    specialty: DataTypes.STRING,
    doctor: DataTypes.STRING, 
  },
  {
    underscored: true,
    timestamps: false,
    tableName: 'Surgeries',
  });

  return Surgerie;
};

module.exports = surgeriesModel;