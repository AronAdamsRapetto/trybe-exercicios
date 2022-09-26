const { Project, Delivery, Student, sequelize } = require('../models');

const findByModule = async (id) => {
	const projects = await Project.findAll({
		where: {
			idModule: id,
		},
	});

	return projects;
};
// CONCLUÍDO COM DUVIDA
const taxApprovedByProject = async ({ idProject, idClass }) => {
	const result = await Delivery.findAll({
		where: {
			idProject
		},
		attributes: ['grade', [sequelize.fn('COUNT', sequelize.col('student.id_student')), 'total']],
		include: {
			model: Student,
			as: 'student',			
			where: {
				idClass,
			},
			attributes: [],					
		},
		group: ['grade'],
	});	
	
	return result;

	// const totalStudent = result.reduce((previous, current) => previous = previous + current.total, 0);
	const totalStudents = result.length;
	// const studentApproved = result.filter(student => student.grade > 0.8).length;
	const studentApproved = result.reduce((acc, student) => student.grade >= 0.8 ? acc += 1 : acc, 0);	

	const response = {
		tax: (studentApproved / totalStudents)
	}

	return response;
};

const create = async (projectData) => {
	const insertedProject = await Project.create(projectData);	

	return insertedProject;
}

module.exports = {
	findByModule,
	taxApprovedByProject,
	create
}