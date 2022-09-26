const express = require('express');
const patientController = require('../controllers/patient.controller');

const router = express.Router();

router.get('/plans', patientController.getPatientsWithPlans);

router.get('/surgeries', patientController.getPatientsWithSurgeries);

router.get('/plan/:id', patientController.getPlanPatientsByPlanId);

router.post('/', patientController.createPatient);

module.exports = router;