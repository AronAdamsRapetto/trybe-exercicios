const express = require('express');
const { employeeController } = require('../controllers');
const { tokenValidation, authRole } = require('../middlewares');

const router = express.Router();

router.get('/search', tokenValidation, authRole, employeeController.searchEmployeeByRole)

router.get('/', tokenValidation, authRole, employeeController.getAllEmployee);

router.get('/:id', tokenValidation, authRole, employeeController.getEmployeeById);

router.post('/', tokenValidation, authRole, employeeController.registerEmployee);

router.put('/:id', tokenValidation, authRole, employeeController.updateEmployee);

router.delete('/:id', tokenValidation, authRole, employeeController.removeEmployee);

module.exports = router;