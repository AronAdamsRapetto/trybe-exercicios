const { Patient, Plan, Surgerie } = require('../models');

const getPatientsWithPlans = async () => {
  const patients = await Patient.findAll({
    include: {
      model: Plan,
      as: 'plan',
    },
  });

  return patients;
};

const getWithoutDoctor = async () => Patient.findAll({
  include: {
    model: Surgerie,
    as: 'surgeries',
    attributes: {
      exclude: ['doctor'],
    },
  },
});

const getPatientsWithSurgeries = async (allowDoctor) => {
  if (!allowDoctor) {
    const patients = await getWithoutDoctor();
    return patients; 
  }
  const patients = await Patient.findAll({
    include: {
      model: Surgerie,
      as: 'surgeries',
    },
  });
  return patients;
};

const getPlanPatientsByPlanId = async (id) => {
  const patients = await Plan.findAll({
    where: {
      planId: id,
    },
    include: {
      model: Patient,
      as: 'patients',
    },
  });

  return patients;
};

const createPatient = async (patientInfo) => {
  const patient = await Patient.create({ ...patientInfo });
  console.log(patient);

  return patient;
};

const getSurgeriesByDoctor = async (name) => {
  const surgeries = await Surgerie.findAll({
    include: {
      model: Patient,
      as: 'patients',
    },
    where: {
      doctor: name,
    },
  });

  return surgeries;
};

module.exports = {
  getPatientsWithPlans,
  getPatientsWithSurgeries,
  getPlanPatientsByPlanId,
  createPatient,
  getSurgeriesByDoctor,
};