const connection = require("../../config/connection");

const getCategoriesQuery = () =>
  connection.query({
    text: "SELECT * FROM categories",
    values: [],
  });

module.exports = getCategoriesQuery;
