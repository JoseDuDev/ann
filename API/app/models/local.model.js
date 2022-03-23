module.exports = (sequelize, Sequelize) => {
  const Local = sequelize.define("local", {
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    capacidade: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    liberado: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Local;
};
