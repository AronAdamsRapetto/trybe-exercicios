const employeeModel = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    idEmployee: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    role: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    underscored: true,
    tableName: 'Employees',
    timestamps: false,
  });

  return Employee;
};

module.exports = employeeModel;