const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.use(express.static('dist/'));

app.listen(8080, 'localhost', () => {
	console.log('Server started. Listening on Port 8080');
});