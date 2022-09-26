const patientService = require('../services/patient.service');

const getPatientsWithPlans = async (_req, res) => {
  const patients = await patientService.getPatientsWithPlans();

  return res.status(200).json(patients);
};

const getPatientsWithSurgeries = async (req, res) => {
  const { allowDoctor } = req.query;
  const patients = await patientService.getPatientsWithSurgeries(allowDoctor);

  return res.status(200).json(patients);
};

const getPlanPatientsByPlanId = async (req, res) => {
  const { id } = req.params;

  const patientsByPlan = await patientService.getPlanPatientsByPlanId(id);

  res.status(200).json(patientsByPlan);
};

const createPatient = async (req, res) => {
  const { body } = req;

  const createdPatient = await patientService.createPatient(body);

  return res.status(200).json(createdPatient);
};

const getSurgeriesByDoctor = async (req, res) => {
  const { name } = req.params;
  
  const surgeries = await patientService.getSurgeriesByDoctor(name);

  res.status(200).json(surgeries);
};

module.exports = {
  getPatientsWithPlans,
  getPatientsWithSurgeries,
  getPlanPatientsByPlanId,
  createPatient,
  getSurgeriesByDoctor,
};