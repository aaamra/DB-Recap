require("env2")(".env");
const { Pool } = require("pg");

const { NODE_ENV, TEST_DB_URL, DEV_DB_URL, DATABASE_URL } = process.env;

let dbURL = "";

if (NODE_ENV === "test") {
  dbURL = TEST_DB_URL;
} else if (NODE_ENV === "dev") {
  dbURL = DEV_DB_URL;
} else if (NODE_ENV === "prod") {
  dbURL = DATABASE_URL;
} else {
  throw new Error("THERE IS NO DB URL");
}

const connection = new Pool({
  connectionString: dbURL,
  ssl: false,
});

module.exports = connection;
