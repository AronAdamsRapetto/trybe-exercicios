const express = require('express');
const { studentController } = require('../controllers');
const { tokenValidation, authRole } = require('../middlewares');

const router = express.Router();

// Lista todos os estudantes por Id de turma
router.get('/class/:id', tokenValidation, authRole, studentController.getStudentsByClassId);

// Lista a nota de uma pessoa em um projeto especifico
router.get('/:idStudent/project/:idProject', tokenValidation, authRole, studentController.getStudentGradeByProject);

// Registra a nota um projeto de uma pessoa especifica
router.post('/:idStudent/project/:idProject', tokenValidation, authRole, studentController.registerStudentGrade);

// Cadastra uma pessoa estudante
router.post('/', tokenValidation, authRole, studentController.registerStudent);

module.exports = router;