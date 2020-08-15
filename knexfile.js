require('dotenv').config();

module.exports = {
  
  development: {
    client: 'pg',
    connection:
      process.env.DATABASE_URL ||
      `postgres://${process.env.USER}@127.0.0.1:5432/fullstack1_todo`,
      seachPath: 'public'
  },

  staging: {
    client: 'pg',
    connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.USER}@127.0.0.1:5432/fullstack1_todo`,
    seachPath: 'public'
    ,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.USER}@127.0.0.1:5432/fullstack1_todo`,
    seachPath: 'public'
    ,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
