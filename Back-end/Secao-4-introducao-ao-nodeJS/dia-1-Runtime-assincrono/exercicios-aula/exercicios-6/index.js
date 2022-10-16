const fs = require('fs').promises;
const readLine = require('readline-sync');

// Exercicio - 1
const readData = async () => JSON.parse(await fs.readFile('./simpsons.json', 'utf-8'));

// Exercicio - 2
const getSimpsonById = async (id) => {
  try {
    const data = await readData();    
    const simpson = data.find(({ id: idSimpson }) => idSimpson === id);
    if (simpson) {
      console.log(`id: ${simpson.id}, name: ${simpson.name}`);
    } else {
      throw new Error('id não encontrado');
    }
  } catch (error) {
    console.log(`${error}`);
  }
}

// Exercicio - 3
const changeDataFile = async () => {
 try {
  const data = await readData();
  const newData = data.filter(({ id }) => id !== '10' && id !== '6');
  await fs.writeFile('./simpsons.json', JSON.stringify(newData));
 } catch (error) {
  console.log(`Erro ao alterar arquivo: ${error}`);
 }
}

// Exercicio - 4
const createNewData = async () => {
  try {
    const data = await readData();
    const newData = data.filter(({ id }) => id <= 4);
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newData));
  } catch (error) {
    console.log(`Erro ao criar novo arquivo: ${error}`);
  }
}

// Exercicio - 5
const addNelsonToFamily = async () => {
  try {
    const dataFamily = JSON.parse(await fs.readFile('simpsonFamily.json', 'utf-8'));
    const data = await readData();
    data.forEach(({ id }, index) => id === '8' && dataFamily.push(data[index]));
    await fs.writeFile('simpsonFamily.json', JSON.stringify(dataFamily));
  } catch (error) {
    console.log(`Erro ao add Nelson para a familia: ${error}`);
  }
}

// Exercicio - 6
const removeNelson_F_Nelson = async () => {
  try {
    const data = await readData();
    const dataFamily = JSON.parse(await fs.readFile('simpsonFamily.json', 'utf-8'));
    const dataFamilyWithoutNelson = dataFamily.filter(({ id }) => id !== '8');
    data.forEach(({ id }, index) => id === '5' && dataFamilyWithoutNelson.push(data[index]));
    await fs.writeFile('simpsonFamily.json', JSON.stringify(dataFamilyWithoutNelson));
  } catch (error) {
    console.log(`Erro ao alterar família.. Nelson feliz! ${error}`);
  }
}

const main = async () => {
  try {
    const data = await readData();    
    data.forEach(({ id, name }) => console.log(`${id} - ${name}`));
    const id = readLine.question('Digite o id de um personagem: ');
    await changeDataFile();
    await getSimpsonById(id);
    createNewData();
    addNelsonToFamily();
    removeNelson_F_Nelson();
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

main();
