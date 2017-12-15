export default {
  port: process.env.PORT || 4000,
  db: {
    database: process.env.DB_NAME || 'blog',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'postgres',
    options: {
      dialect: process.env.DB_DIALECT || 'postgres',
      host: process.env.DB_HOST || 'localhost',
    },
  },
};

