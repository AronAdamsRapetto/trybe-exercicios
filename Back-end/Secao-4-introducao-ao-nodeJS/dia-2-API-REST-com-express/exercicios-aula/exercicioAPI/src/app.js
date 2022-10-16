const express = require('express');
const service = require('./service');

const app = express();

app.use(express.json());

app.get('/myActivities/:id', async (req, res) => {
  const { id } = req.params;
  const activitie = await service.getActivitieById(id);

  res.status(200).json({ activitie });
});

app.get('/myActivities', async (req, res) => {
  const activities = await service.getAllActivities();

  res.status(200).json({ activities });
});

app.get('/filter/myActivities', async (req, res) => {
  const { status } = req.query;

  const activities = await service.getActivitieByStatus(status);

  res.status(200).json({ activities });
});

app.get('/search/myActivities', async (req, res) => {
  const { q } = req.query;

  const activitie = await service.getActivitieByDescri(q);

  res.status(200).json({ activitie });
});

module.exports = app;