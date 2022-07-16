import express from 'express';

const app = express();

app.get('/', (req, res) => {
	return res.json({
		message: 'Hello World',
	});
});

const port = 8082;
app.listen(port, () => console.log('Server is running'));
