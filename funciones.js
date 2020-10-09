const saludo = () => {
  return "Hola node";
};

const despedida = () => {
  return "Adios node";
};

module.exports = {
  saludo2: saludo,
  despedida,
};
