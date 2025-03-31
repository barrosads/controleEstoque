// Altere para a sintaxe 'import' em vez de 'require'
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Produto from '../models/Produto';
import Fornecedor from '../models/Fornecedor';
import ProdutoFornecedor from '../models/ProdutoFornecedor';

const models = [User, Produto, Fornecedor, ProdutoFornecedor];
const conexao = new Sequelize(databaseConfig);

models.forEach((model) => model.init(conexao));
models.forEach((model) => model.associate && model.associate(conexao.models));

export default conexao;
