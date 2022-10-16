const express = require('express');
const cacaoTrybe = require('./cacaoTrybe');

const app = express();

app.use(express.json());

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const chocolates = await cacaoTrybe.getChocolateByName(name);
  res.status(chocolates.length > 0 ? 200 : 404).json({ chocolates })
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacaoTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (req, res) => {
  const totalChocolates = await cacaoTrybe.getTotalChocolates();
  res.status(200).json({ totalChocolates });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolate = await cacaoTrybe.getChocolateById(Number(id));
  res.status(200).json({ chocolate });
});

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;
  
  const chocolate = await cacaoTrybe.updateChocolateById(id, name, brandId);
  if (chocolate) {
    res.status(200).json({ chocolate });
  } else {
    res.status(404).json({ message: "chocolate not found" });
  }
});



module.exports = app;