require('dotenv').config({});

module.exports = {
  products: {
    connector: 'mysql',
    "table" : "products",
    "name": "products",
    hostname: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  comments: {
    connector: 'mysql',
    "table" : "comments",
    "name": "comments",
    hostname: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  }
};
