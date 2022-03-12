const { addPostQuery } = require('../../database/queries');


const addPost = (req ,res) => {
    
    addPostQuery(req.body)
    .then((data) => {
        res.status(201).json({
            message: 'post added successflly !',
            post: data.rows[0]
        });
    }).catch(() => res.json({ message: "error" }));

};

module.exports = addPost;