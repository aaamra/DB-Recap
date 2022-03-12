const connection = require("./connection");
const { readFileSync } = require('fs');
const { join } = require('path');

const build = () => {
  const sql = readFileSync(join(__dirname, 'build.sql')).toString();

  return connection.query(sql);
};

module.exports = build;
