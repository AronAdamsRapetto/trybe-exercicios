const express = require('express');
const validateTeam = require('../middlewares/validadeTeam');

const router = express.Router();

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

router.get('/', (req, res) => res.json(teams));

const existingId = (req, res, next) => {
  const { id } = req.params;
  if (teams.some(({ id: teamId }) => teamId === Number(id))) {
    next();
  } else {
    res.sendStatus(404);
  }
}

router.get('/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
    res.json(team);
});

// Arranja os middlewares para chamar validateTeam primeiro
router.post('/', validateTeam, (req, res) => {
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

router.put('/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);  
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

router.delete('/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(200);
});

module.exports = router;