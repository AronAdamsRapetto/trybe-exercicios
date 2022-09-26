const { Student, Project, Delivery } = require('../models');

const getByClassId = async (classId) => Student.findAll({
	where: {
		idClass: classId,
	}
});

const gradeByProject = async ({ idStudent, idProject }) => Delivery.findAll({
	where: {
		idProject,
		idStudent,
	},
	attributes: ['grade', 'delivery_date'],
	include: [
		{
			model: Project,
			as: 'project',
			attributes: ['name', 'description']
		},
		{
			model: Student,
			as: 'student',
			attributes: ['name', 'email']
		}
	],
});

const registerGrade = async ({ idStudent, idProject, grade }) => Delivery.create({ idStudent, idProject, grade });

const registerStudent = async (student) => Student.create(student);

module.exports = {
	getByClassId,
	gradeByProject,
	registerGrade,
	registerStudent,
};