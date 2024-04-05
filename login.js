const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const port = 1999;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

let user = [
    {
        id: 1,
        name: 'shivam',
        password: 'pass'
    },
    {
        id: 2,
        name: 'Anshu',
        password: 'pass1'
    }
];

function auth(req, res, next) {
    if (req.session && req.session.user) {
        return next();
    } else {
        return res.redirect('/login');
    }
}

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/login', (req, res) => {
    if (!req.body.username || !req.body.password) {
        res.send('Enter username and password');
        return;
    }
    let result = user.find(u => u.name === req.body.username && u.password === req.body.password);
    if (result) {
        req.session.user = result;
        res.redirect('/protected');
    } else {
        res.send('Login failed');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.send('Logged out');
});

app.get('/protected', auth, (req, res) => {
    res.send('Welcome to protected page');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});