const { Account, Profile, Comment } = require('../models');

const getAccountById = async (id) => {
  const account = await Account.findAll({
    where: {
      id,
    },
    include: {
      model: Profile,
      as: 'profile',
    },
  });

  if (!account) return { type: 404, message: 'Account not found' };
  return { type: null, message: account };
};

const lazyGetAccountById = async (id) => {
  const account = await Account.findByPk(id);

  if (!account) return { type: 404, message: 'Account not found!' };

  const profile = await Profile.findOne({
    where: {
      accountId: account.id,
    },  
  });

  return { type: null, message: { account, profile } };
};

const getCommentsByAccount = async (id) => {
  const comments = await Comment.findAll({
    where: {
      accountId: id,
    },
  });

  if (comments.length < 1) return { type: 404, message: 'Comments not found' };
  return { type: null, message: comments };
};

const createAccount = async ({ email, password, firstName, lastName, phone }) => {  
    const { dataValues: account } = await Account.create({ email, password });

    const profile = await Profile.create({
      firstName,
      lastName,
      phone,
      accountId: account.id,
    });

  return { type: null, createdAccount: { ...account, profile } };
};

const createComment = async (message, accountId) => {
  const comment = await Comment.create({ message, upvoting: 0, downvoting: 0, accountId });

  return comment;
};

module.exports = {
  getAccountById,
  lazyGetAccountById,
  getCommentsByAccount,
  createAccount,
  createComment,
};