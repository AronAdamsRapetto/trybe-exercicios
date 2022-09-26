const classModel = (sequelize, DataTypes) => {
  const Classe = sequelize.define('Classe', {
    idClass: {
      type: DataTypes.INTEGER,
      primarKey: true,
      // autoIncrement: true,
    },
    name: DataTypes.STRING,
    alias: DataTypes.STRING,
  },
  {
    underscored: true,
		tableName: 'Classes',
		timestamps: false,
  });

  Classe.associate = (models) => {
    Classe.hasMany(models.Student, {
      foreignKey: 'idClass',
      as: 'students',
    });
  }

  return Classe;
};

module.exports = classModel;