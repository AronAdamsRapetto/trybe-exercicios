const { Employee } = require('../models');

const getAllEmployee = async () => Employee.findAll();

const getEmployeeById = async (id) => Employee.findOne({
  where: {
    idEmployee: id,
  }
});

const searchEmployeeByRole = async (role) => Employee.findAll({
  where: {
    role,
  }
});

const registerEmployee = async (employee) => Employee.create({ ...employee });

const updateEmployee = async (id, employee) => Employee.update({ ...employee }, {
  where: {
    idEmployee: id,
  }
});

const removeEmployee = async (id) => Employee.destroy({
  where: {
    idEmployee: id,
  }
});

module.exports = {
  getAllEmployee,
  getEmployeeById,
  searchEmployeeByRole,
  registerEmployee,
  updateEmployee,
  removeEmployee,
}