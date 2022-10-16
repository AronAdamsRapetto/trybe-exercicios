const fs = require('fs').promises;
const { join } = require('path');
const crypto = require('crypto');

const readDataFile = async (path) => {
  try {
    const data = await fs.readFile(join(__dirname, path), 'utf-8');

    return JSON.parse(data);
  } catch (error) {
    console.log('Erro ao ler arquivo: ', error.message);
    return null
  }
}

const writeDataFile = async (content, path) => {
  try {
    await fs.writeFile(join(__dirname, path), JSON.stringify(content));
  } catch (error) {
    console.log('Erro ao escrever arquivo: ', error.message);
  }
}

const generateToken = () => crypto.randomBytes(8).toString('hex');

const addActivitie = async (activitie) => {
  const path = 'data/activitiesDataFile.json';
  const activitiesData = await readDataFile(path);

  activitiesData.push(activitie, path);
  await writeDataFile(activitiesData);

  return { message: "Atividade cadastrada com sucesso!" };
}

const addUser = async (user) => {
  const path = 'data/usersDataFile.json';
  const usersData = await readDataFile(path);
  const token = generateToken();
  console.log(user);

  const newUser = {
    token,
    ...user
  }

  usersData.push(newUser);
  writeDataFile(usersData, path);

  return token;
}

module.exports = {
  addActivitie,
  addUser,
  readDataFile
};