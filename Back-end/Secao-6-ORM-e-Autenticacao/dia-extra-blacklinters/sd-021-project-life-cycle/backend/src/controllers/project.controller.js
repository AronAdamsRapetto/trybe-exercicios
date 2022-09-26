const { projectService } = require('../services');

// Lista os projetos de um módulo
const findProjectByModule = async (req, res) => {
	const { id } = req.params;
	const projects = await projectService.findByModule(id);

	res.status(200).json(projects);
};

// Listar a porcentagem de aprovação de uma turma em um projeto específico.
const getTaxApprovedByProject = async (req, res) => {
	const { idProject, idClass } = req.params;
	const tax = await projectService.taxApprovedByProject({ idProject, idClass });

	res.status(200).json(tax);
};

// Cria um novo projeto
const createProject = async (req, res) => {
	const newProject = await projectService.create(req.body);

	res.status(201).json(newProject);
};

module.exports = {
	findProjectByModule,
	getTaxApprovedByProject,
	createProject
}