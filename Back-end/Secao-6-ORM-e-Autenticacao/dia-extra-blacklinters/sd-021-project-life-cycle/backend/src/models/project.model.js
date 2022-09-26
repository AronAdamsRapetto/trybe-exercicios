const projectModel = (sequelize, DataTypes) => {
	const Project = sequelize.define('Project', {
		idProject: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: DataTypes.STRING,
		description: DataTypes.STRING,
		requirements: DataTypes.INTEGER,
		idModule: {
			type: DataTypes.INTEGER,
			foreignKey: true,
		},
	},
	{
		underscored: true,
		tableName: 'Projects',
		timestamps: false,
	});

	Project.associate = (models) => {
		Project.belongsTo(models.Module, {
			foreignKey: 'idModule',
			as: 'module',
		});
		
		Project.hasMany(models.Delivery, {
			foreignKey: 'idProject',
			as: 'deliverys',
		});
	};

	return Project;
};

module.exports = projectModel;

// const taxApprovedByProject = async ({ idClass, idProject }) => {
// 	const [result] = await conn.execute(`SELECT 
// 		grade, count(*) as total
// 		FROM delivery d
// 		JOIN student s ON s.id_student = d.id_student
// 		JOIN project p ON p.id_project = d.id_project
// 		WHERE s.id_class = ? AND d.id_project = ?
// 		GROUP BY grade`, [idClass, idProject]);

// 	return result;
// };
