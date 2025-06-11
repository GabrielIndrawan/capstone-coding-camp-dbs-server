const {Pool} = require('pg');

const pool = new Pool({
  connectionString: proccess.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

module.exports = pool;