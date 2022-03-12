const { join } = require("path");

const details = (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "..", "public", "details.html"));
};

module.exports = details;
