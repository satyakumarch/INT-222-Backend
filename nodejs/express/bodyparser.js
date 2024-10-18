const bodyparser = require('body-parser')
const express = require("express")
const path = require('path')
const app = express()
let PORT = process.env.port || 3000
app.set("views", path.join(__dirname))
app.set("view engine", "ejs")
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.get("/", function (req, res) {
	res.render("SampleForm")
});
app.post('/saveData', (req, res) => {
	console.log("Using Body-parser: ", req.body.email)
})
app.listen(PORT, function (error) {
	if (error) throw error
	console.log("Server created Successfully on PORT", PORT)
})
