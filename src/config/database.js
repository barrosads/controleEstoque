require('dotenv').config();

export default {
  dialect: 'sqlite',
  storage: './src/database/db_sistema.sqlite',
  define: {
    timestamps: true,
    underscored: true,
  },
};
