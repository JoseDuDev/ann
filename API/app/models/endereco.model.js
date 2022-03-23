module.exports = (sequelize, Sequelize) => {
  const Endereco = sequelize.define("endereco", {
    cep: {
      type: Sequelize.STRING,
    },
    logradouro: {
      type: Sequelize.STRING,
    },
    numero: {
      type: Sequelize.STRING,
    },
    bairro: {
      type: Sequelize.STRING,
    },
    cidade: {
      type: Sequelize.STRING,
    },
    estado: {
      type: Sequelize.STRING,
    },
  });
  return Endereco;
};
