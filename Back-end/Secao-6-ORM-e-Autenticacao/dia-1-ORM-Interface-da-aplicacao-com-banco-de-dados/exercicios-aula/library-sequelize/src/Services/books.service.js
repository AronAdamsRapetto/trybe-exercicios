const { Book } = require('../models');

const getAll = async (q) => {
  let book;
  if (q) {
    book = await getByAuthor(q);
  } else {
    book = await Book.findAll({
      order: [ ['title', 'ASC'] ]
    });
  }
  return book;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);

  if (!book) return { type: 'NOT_FOUND', message: 'Book not found' }
  return { type: null, message: book };
};

const create = async ({ title, author, pageQuantity, publisher }) => {
  const result = await Book.create({ title, author, page_quantity: pageQuantity, publisher });

  return result;
}

const update = async (id, { title, author, pageQuantity, publisher }) => {
  const book = await getById(id);

  if (book.type) return book;

  const result = await Book.update(
    { title, author, page_quantity: pageQuantity, publisher },
    { where: { id }}
  );

  return { type: null, message: 'Book updated!' };
};

const remove = async (id) => {
  const result = await Book.destroy({
    where: {
      id
    }
  });

  return result;
};

const getByAuthor = async (query) => Book.findAll({
  where: {
    author: query,
  },
  order: [ ['title', 'ASC'] ]
});


module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor,
}