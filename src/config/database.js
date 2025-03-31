import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

export default {
  dialect: 'sqlite',
  // Aqui usamos o resolve para garantir que o caminho seja correto
  storage: resolve(__dirname, './src/database/db_sistema.sqlite'), // Certifique-se de que este caminho é válido
  define: {
    timestamps: true,
    underscored: true,
  },
};

