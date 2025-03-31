import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';
import User from '../models/User';
import Produto from '../models/Produto';
import Fornecedor from '../models/Fornecedor';
import ProdutoFornecedor from '../models/ProdutoFornecedor';

// Inicializa a conexão com o banco de dados usando as configurações
const conexao = new Sequelize(databaseConfig);

// Inicializa os modelos
const models = [User, Produto, Fornecedor, ProdutoFornecedor];
models.forEach((model) => model.init(conexao));

// Associa os modelos, se houver relações definidas
models.forEach((model) => model.associate && model.associate(conexao.models));

// Testando a conexão com o banco de dados
conexao.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados foi bem-sucedida!');
  })
  .catch((err) => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

export default conexao;
