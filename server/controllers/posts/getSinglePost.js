const { getPostByIdQuery } = require("../../database/queries");

const allSonglePost = (req, res) => {

    const { id } = req.params;

    getPostByIdQuery(id)
    .then(data => {
        res.json(data.rows[0]);
    }).catch(err => res.status(500).json({error: "server error !"}));
};


module.exports = allSonglePost;