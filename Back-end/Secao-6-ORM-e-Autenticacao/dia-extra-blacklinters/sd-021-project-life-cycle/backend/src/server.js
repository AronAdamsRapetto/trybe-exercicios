require('dotenv').config();
const app = require('./app');

const PORT = process.env.API_PORT || 3001;

app.listen(3001, async () => {
	console.log('App running on port 3001');
});