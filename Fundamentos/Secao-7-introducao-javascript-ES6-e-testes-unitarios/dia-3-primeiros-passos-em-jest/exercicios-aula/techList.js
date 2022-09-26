const techList = (tech, name) => {
    let tecnologias = [];
    tech.sort();
    if (tech.length > 0) {
      for (let index of tech) {
        tecnologias.push({
          tech: index,
          name,
        });
      }
    } else {
      return 'Vazio!';
    }
    return tecnologias;
  }

  module.exports = techList;