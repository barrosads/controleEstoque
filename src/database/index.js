import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';
import User from '../models/User.js';
import Produto from '../models/Produto.js';
import Fornecedor from '../models/Fornecedor.js';
import ProdutoFornecedor from '../models/ProdutoFornecedor.js';

const models = [User, Produto, Fornecedor, ProdutoFornecedor];
const conexao = new Sequelize(databaseConfig);

models.forEach((model) => model.init(conexao));
models.forEach((model) => model.associate && model.associate(conexao.models));

export default conexao;