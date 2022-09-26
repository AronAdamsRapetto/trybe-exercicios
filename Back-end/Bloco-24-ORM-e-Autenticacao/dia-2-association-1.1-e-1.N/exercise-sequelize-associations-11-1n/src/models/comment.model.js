const commentModel = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    // },
    message: DataTypes.STRING,
    upvoting: DataTypes.INTEGER,
    downvoting: DataTypes.INTEGER,
    accountId: DataTypes.INTEGER,
  },
  {
    tableName: 'Comments',
    underscored: true,
    timestamps: false,
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.Account, {
      foreignKey: 'accountId',
      as: 'account',
    });
  }

  return Comment;
};

module.exports = commentModel;