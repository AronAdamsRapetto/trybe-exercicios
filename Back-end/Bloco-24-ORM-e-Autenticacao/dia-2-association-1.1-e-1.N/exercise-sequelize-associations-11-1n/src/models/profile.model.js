const profileModel = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    // },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.STRING,
    accountId: DataTypes.INTEGER,
  },
  {
    tableName: 'Profiles',
    underscored: true,
    timestamps: false,
  });

  Profile.associate = (models) => {
    Profile.belongsTo(models.Account, {
      foreignKey: 'accountId',
      as: 'account',
    });
  };

  return Profile;
};

module.exports = profileModel;