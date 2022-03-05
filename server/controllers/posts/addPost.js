const { addPostQuery } = require("../../database/queries");

const addPost = (req, res) => {

    addPostQuery(req.body)
    .then(data => {
        res.json({
            message: 'post added successfully !',    
            post: data.rows[0]
        });
    }).catch(err => res.status(500).json({error: "server error !"}));
};


module.exports = addPost;