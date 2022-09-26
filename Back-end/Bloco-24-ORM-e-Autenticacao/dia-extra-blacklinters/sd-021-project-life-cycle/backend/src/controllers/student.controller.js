const { studentService } = require('../services');

const getStudentsByClassId = async (req, res) => {
	const { id } = req.params;
	const students = await studentService.getByClassId(id);

	res.status(200).json(students);;
};

const getStudentGradeByProject = async (req, res) => {
	const { idStudent, idProject } = req.params;
	const grade = await studentService.gradeByProject({ idStudent, idProject });

	res.status(200).json(grade);
};

const registerStudentGrade = async (req, res) => {
	const { idStudent, idProject } = req.params;
	const { grade } = req.body;

	await studentService.registerGrade({ idStudent, idProject, grade });
	res.status(201).json({ message: `Grade registered successfully.` });
};

const registerStudent = async (req, res) => {
	const { body } = req;
	const insertedStudent = await studentService.registerStudent(body);
	res.status(201).json(insertedStudent);
};

module.exports = {
	getStudentsByClassId,
	getStudentGradeByProject,
	registerStudentGrade,
	registerStudent,
};