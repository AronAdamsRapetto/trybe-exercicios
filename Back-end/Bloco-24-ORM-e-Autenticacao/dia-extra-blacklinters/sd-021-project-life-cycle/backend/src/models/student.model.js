const studentModel = (sequelize, DataTypes) => {
	const Student = sequelize.define('Student', {
		idStudent: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING,
		idClass: {
			type: DataTypes.INTEGER,
			foreignKey: true,
		}
	},
	{
		underscored: true,
		tableName: 'Students',
		timestamps: false,
	});

	Student.associate = (models) => {
		Student.belongsTo(models.Classe, {
			foreignKey: 'idClass',
			as: 'class',
		});

		Student.hasMany(models.Delivery, {
			foreignKey: 'idStudent',
			as: 'deliverys',
		});
	};

	return Student;
};

module.exports = studentModel;
