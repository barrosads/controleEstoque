require('dotenv').config();

module.exports = {
  dialect: 'sqlite',
  storage: `./${process.env.DATABASE_URL.replace('sqlite:', '')}`,
  define: {
    timestamps: true,
    underscored: true,
  },
};
