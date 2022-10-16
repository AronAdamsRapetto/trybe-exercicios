const express = require('express');
const { projectController } = require('../controllers');
const { tokenValidation, authRole } = require('../middlewares');

const router = express.Router();

// Lista os projetos de um módulo
router.get('/module/:id', tokenValidation, authRole, projectController.findProjectByModule);

// Listar a porcentagem de aprovação de uma turma em um projeto específico.
router.get('/:idProject/class/:idClass', tokenValidation, authRole, projectController.getTaxApprovedByProject)

// Cria um novo projeto
router.post('/', tokenValidation, authRole, projectController.createProject);

module.exports = router;