module.exports = (sequelize, Sequelize) => {
  const Empresa = sequelize.define("empresa", {
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cnpjcpf: {
      type: Sequelize.STRING,
    },
    inscricaoestatual: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    url: {
      type: Sequelize.STRING,
    },
    enderecoId: {
      type: Sequelize.INTEGER,
      references: "enderecos",
      referencesKey: "id",
      allowNull: true,
    },
  });

  return Empresa;
};
