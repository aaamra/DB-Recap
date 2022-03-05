const { join } = require('path');

const detailsPage = (req, res) => {
    res.sendFile(join(__dirname, '..', '..' , '..', 'public', 'details.html'));
};

module.exports = detailsPage;