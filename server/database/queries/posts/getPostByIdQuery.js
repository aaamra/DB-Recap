const connection = require('../../config/connection');

const getPostByIdQuery = (id) => {
    return connection.query('SELECT * FROM posts WHERE id = $1', [id]);
};

module.exports = getPostByIdQuery;