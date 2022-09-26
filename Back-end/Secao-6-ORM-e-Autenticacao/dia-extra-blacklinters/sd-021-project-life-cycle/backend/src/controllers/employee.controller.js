const { employeeService } = require('../services');

const getAllEmployee = async (_req, res) => {
  const employees = await employeeService.getAllEmployee();
  return res.status(200).json(employees);
};

const getEmployeeById = async (req, res) => {
  const { id } = req.params;
  const employee = await employeeService.getEmployeeById(id);

  return res.status(200).json(employee);
};

const searchEmployeeByRole = async (req, res) => {
  const { role } = req.query;
  const employees = await employeeService.searchEmployeeByRole(role);

  return res.status(200).json(employees);
};

const registerEmployee = async (req, res) => {
  const { body } = req;  
  const registeredEmployee = await employeeService.registerEmployee(body);

  return res.status(201).json(registeredEmployee);
};

const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  await employeeService.updateEmployee(id, body);

  return res.status(200).json ({ message: 'Atualizado com sucesso' });
};

const removeEmployee = async (req, res) => {
  const { id } = req.params;

  await employeeService.removeEmployee(id);

  return res.status(204).json();
};

module.exports = {
  getAllEmployee,
  getEmployeeById,
  searchEmployeeByRole,
  registerEmployee,
  updateEmployee,
  removeEmployee,
};