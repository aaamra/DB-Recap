const connection = require('../../config/connection');


const addPostQuery = ({ username, title, content }) => connection.query({
    text: 'INSERT INTO posts(username, title,content) values ($1,$2,$3) RETURNING *',
    values: [username, title, content]
});

module.exports = addPostQuery;