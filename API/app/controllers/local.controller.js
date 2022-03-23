const db = require("../models");
const Local = db.locals;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.nome || !req.body.capacidade) {
    res.status(400).send({
      message: "O conteúdo não pode ficar vazio!",
    });
    return;
  }

  const objeto = {
    nome: req.body.nome,
    capacidade: req.body.capacidade,
    liberado: req.body.liberado ? req.body.liberado : false,
  };

  Local.create(objeto)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu algum erro ao criar o Local.",
      });
    });
};

exports.findAll = (req, res) => {
  const nome = req.query.nome;
  var condition = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;
  Local.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu algum erro ao recuperar os tutoriais.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Local.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não é possível encontrar Local com id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao recuperar Local com id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Local.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Local foi atualizado com sucesso.",
        });
      } else {
        res.send({
          message: `Não é possível atualizar o Local com id=${id}. Talvez Local não foi encontrado ou req.body está vazio!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao atualizar Local com id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Local.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Local foi excluído com sucesso!",
        });
      } else {
        res.send({
          message: `Não é possível excluir Local com id=${id}. Talvez o Local não tenha sido encontrado!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Não foi possível excluir Local com id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Local.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Os locais foram excluídos com sucesso!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Ocorreu algum erro ao remover todos os locais.",
      });
    });
};

exports.findAllLiberados = (req, res) => {
  Local.findAll({ where: { liberado: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Ocorreu algum erro ao recuperar os locais liberados.",
      });
    });
};
