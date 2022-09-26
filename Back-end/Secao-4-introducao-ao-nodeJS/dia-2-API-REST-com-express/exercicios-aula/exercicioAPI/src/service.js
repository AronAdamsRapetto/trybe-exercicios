const fs = require('fs').promises;
const { join } = require('path');

const path = '/data/activities.json'; 

const readActivitiesData = async () => {
  try {
    const activities = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(activities);
  } catch (error) {
    console.log('Erro ao ler arquivo: ', error.message);
    return null;
  }
};

const getActivitieById = async (activiteId) => {
  const activities = await readActivitiesData();
  return activities.find(({ id }) => id === Number(activiteId));
};

const getAllActivities = async () => {
  const activities = await readActivitiesData();

  return activities;
};

const getActivitieByStatus = async (searchStatus) => {
  const activities = await readActivitiesData();

  return activities.filter(({ status }) => status === searchStatus);
};

const getActivitieByDescri = async (query) => {
  const activities = await readActivitiesData();

  return activities.filter(({ description }) => description.includes(query));
};

module.exports = {
  getActivitieById,
  getAllActivities,
  getActivitieByStatus,
  getActivitieByDescri,
};
