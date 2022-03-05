const { getPostCommentsQuery } = require("../../database/queries");

const getPostComments = (req, res) => {

    const { id } = req.params;

    getPostCommentsQuery(id)
    .then(data => {
        res.json(data.rows);
    }).catch(err => res.status(500).json({error: "server error !"}));
};


module.exports = getPostComments;