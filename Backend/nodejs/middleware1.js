const express = require('express')
const app = express()
const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}
app.use(myLogger)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(3001)
// const express = require("express");
// const app = express();
// const port = 3000;
// app.use((req, res, next) => {
// 	console.log(`Incoming Request: ${req.method} ${req.url}`);
// 	next(); 
// });
// app.get("/favicon.ico", (req, res) => {
// 	res.status(204).end(); 
// });
// app.get("/greet/:name", (req, res) => {
// 	const geekName = req.params.name;
// 	const htmlResponse = `
// 	<!DOCTYPE html>
// 	<html lang="en">
// 	<head>
// 	<meta charset="UTF-8">
// 	<meta name="viewport" content="width=device-width, 
// 		initial-scale=1.0">
// 	<title>Greeting Page</title>
// 	</head>
// 	<body>
// 	<h1>Hello, ${geekName}!</h1>
// 	</body>
// 	</html>
// `;
// 	console.log(`Outgoing Response: ${res.statusCode} ${res.statusMessage}`);
// 	res.send(htmlResponse);
// });
// app.listen(port, () => {
// 	console.log(`Server is running at http://localhost:${port}`);
// });

