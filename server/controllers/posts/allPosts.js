const { getPostsQuery } = require("../../database/queries");

const allPosts = (req, res) => {
    getPostsQuery()
    .then(data => {
        res.json(data.rows);
    }).catch(err => res.status(500).json({error: "server error !"}));
};


module.exports = allPosts;