const booksService = require('../Services/books.service');
const mapErrorCode = require('../utils/errorMap');

const getAll = async (req, res) => {
  const { q } = req.query;
  
  const books = await booksService.getAll(q);
  return res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await booksService.getById(id);

  if (type) return res.status(mapErrorCode(type)).json({ message });
  return res.status(200).json(message);
};

const create = async (req, res) => {
  const { body } = req;

  const result = await booksService.create(body);
  return res.status(201).json(result);
};

const update = async (req, res) => {
  const { body } = req;
  const { id } = req.params;

  const { type, message } = await booksService.update(id, body);

  if (type) return res.status(mapErrorCode(type)).json({ message })
  return res.status(200).json({ message });
};

const remove = async (req, res) => {
  const { id } = req.params;
  
  const isBookRemoved = await booksService.remove(id);

  if (!isBookRemoved) return res.status(500).json({ message: 'Algo deu errado' }); 
  res.status(204).json();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}