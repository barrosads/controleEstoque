// pasta/database/index.js

const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');
const User = require('../models/User');
const Produto = require('../models/Produto');
const Fornecedor = require('../models/Fornecedor');
const ProdutoFornecedor = require('../models/ProdutoFornecedor');

const models = [User, Produto, Fornecedor, ProdutoFornecedor];
const conexao = new Sequelize(databaseConfig);

models.forEach((model) => model.init(conexao));
models.forEach((model) => model.associate && model.associate(conexao.models));

module.exports = conexao;
