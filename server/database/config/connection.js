require("env2")(".env");
const { Pool } = require("pg");

const { NODE_ENV, DATABASE_URL, DEV_DB_URL, TEST_DB_URL } = process.env;

let connectionString = "";
let ssl = false;

switch (NODE_ENV) {
  case "prod":
    connectionString = DATABASE_URL;
    ssl = {
      rejectUnauthorized: false,
    };
    break;
  case "dev":
    connectionString = DEV_DB_URL;
    break;

  case "test":
    connectionString = TEST_DB_URL;
    break;

  default:
    throw new Error("invalid db url");
}

const connection = new Pool({
  connectionString,
  ssl,
});

module.exports = connection;
