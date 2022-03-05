const app = require('./app');

const port = app.get('PORT');

app.listen(port, () => {
    console.log('hello server is running on port ' + port);
});
