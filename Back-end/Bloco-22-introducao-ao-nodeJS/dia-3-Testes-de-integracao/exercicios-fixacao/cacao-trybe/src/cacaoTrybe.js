const fs = require('fs').promises;
const { join } = require('path');

const readCacaoTrybeFile = async () => {
  const path = '/files/cacaoTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacaoTrybeFile = async (newContent) => {
  const path = '/files/cacaoTrybeFile.json';
  try {
    await fs.writeFile(join(__dirname, path), JSON.stringify(newContent));
  } catch (error) {
    console.log('Erro ao alterar arquivo: ', error.message);
    return null;
  }
}

const getAllChocolates = async () => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const getTotalChocolates = async () => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates.length;
};

const getChocolateByName = async (name) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  const { chocolates } = cacaoTrybe;
  return chocolates.filter(({ name: chocolateName }) => chocolateName.includes(name));
};

const updateChocolateById = async (id, name, brandId) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  const chocolatesUpdated = cacaoTrybe.chocolates.map((chocolate) => {
    if (chocolate.id === Number(id)) {
      chocolate.name = name;
      chocolate.brandId = brandId;
    }
    return chocolate;
  });
  cacaoTrybe.chocolate = { ...chocolatesUpdated };
  await writeCacaoTrybeFile(cacaoTrybe);
  return chocolatesUpdated.find(({ id: chocoId }) => chocoId === Number(id));
}

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  getTotalChocolates,
  getChocolateByName,
  updateChocolateById,
};