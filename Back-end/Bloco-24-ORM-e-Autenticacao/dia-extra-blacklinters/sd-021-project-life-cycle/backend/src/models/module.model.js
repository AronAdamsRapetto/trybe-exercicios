const moduleModel = (sequelize, DataTypes) => {
  const Module = sequelize.define('Module', {
    idModule: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  },
  {
    underscored: true,
		tableName: 'Modules',
		timestamps: false,
  });

  Module.associate = (models) => {
    Module.hasMany(models.Project, {
      foreignKey: 'idModule',
      as: 'projects',
    })
  };

  return Module;
};

module.exports = moduleModel;