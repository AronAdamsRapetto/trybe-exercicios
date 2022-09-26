const accountModel = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   allowNull: false,
    //   autoIncrement: true,
    // },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    tableName: 'Accounts',
    underscored: true,
    timestamps: false,
  });

  Account.associate = (models) => {
    Account.hasOne(models.Profile, {
      foreignKey: 'accountId',
      as: 'profile',
    });
    
    Account.hasMany(models.Comment, {
      foreignKey: 'id',
      as: 'comments',
    });
  }; 

  return Account;
};

module.exports = accountModel;