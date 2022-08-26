const { getCategoriesQuery } = require("../../database/queries");

const getCategories = (req, res) => {
  getCategoriesQuery()
    .then((data) => {
      res.json(data.rows);
    })
    .catch(() => res.status(500).json({ message: "server error !" }));
};

module.exports = getCategories;
