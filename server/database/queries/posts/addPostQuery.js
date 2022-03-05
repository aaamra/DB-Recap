const connection = require('../../config/connection');

const addPostQuery = ({ username, title, content }) => {
    return connection
    .query(
        'INSERT INTO posts (username, title, content) values($1,$2,$3) RETURNING *',
        [username,title,content]
    );
};

module.exports = addPostQuery;