const express = require('express');
const tasksDB = require('../db/tasksDB');

const router = express.Router();

router.post('/', async (req, res) => {
  const { body } = req;
  try {
    const [result] = await tasksDB.insert(body);    
    res.status(201).json({ message: `Inserido com sucesso no id ${result.insertId}` }); 
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.sqlMessage });
  }
});

router.put('/:id', async (req, res) => {
  const { params: { id }, body } = req;
  try {
    const [result] = await tasksDB.update(body, id);
    res.status(200).json({ message: `Linhas atuaizadas com sucesso: ${result.affectedRows}` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.sqlMessage });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await tasksDB.remove(id);
    res.status(200).json({ message: `Linhas removidas com sucesso: ${result.affectedRows}` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.sqlMessage });
  }
});

router.get('/', async (_req, res) => {
  try {
    const [result] = await tasksDB.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.sqlMessage });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await tasksDB.findById(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.sqlMessage });
  }
});

module.exports = router;
