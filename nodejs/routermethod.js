const express = require('express');
const app = express();
const router = express.Router();
const PORT = 3000;

// Multiple routes
router.get('/user', function (req, res, next) {
	console.log("GET request called");
	res.end();
});

router.post('/user', function (req, res, next) {
	console.log("POST request called");
	res.end();
});

router.delete('/user', function (req, res, next) {
	console.log("DELETE request called");
	res.end();
})

app.use(router);

app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
