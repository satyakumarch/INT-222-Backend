const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/hello', (req, res) => {
    const name = req.query.name || 'Anonymous';
    res.send(`Hello, ${name}!`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
