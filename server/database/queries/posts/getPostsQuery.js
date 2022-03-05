const connection = require('../../config/connection');

const getPostsQuery = () => {
    return connection.query('SELECT * FROM posts');
};

module.exports = getPostsQuery;