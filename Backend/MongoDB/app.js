const express = require('express');
require('./connect');
const app = express();
const bodyParser = require('body-parser');
const Student = require('./connect');

// Middleware setup
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the signup page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});

// Handle signup requests
app.post('/signup', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.send(`
            <h2>User registered successfully</h2>
            <p>Click <a href="/login">here</a> to login or click <a href="/">here</a> to register another user.</p>
        `);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});

// Handle login requests (using POST)
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const student = await Student.findOne({ fname: username, password: password });
        if (student) {
            res.redirect('/dashboard');
        } else {
            res.status(401).send('Invalid username or password');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// Serve the dashboard page
app.get('/dashboard', (req, res) => {
    res.send('Welcome user');
});

// Start the server
app.listen(8000, () => {
    console.log('Server is running on port 8080');
});
