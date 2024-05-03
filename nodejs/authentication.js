const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const port = 3500;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));
let users = [
   { id: 1, username: 'Mamta', password: 'password1' },
 { id: 2, username: 'Mamtash', password: 'password2' }
];
function authenticate(req, res, next) {
    if (req.session && req.session.user) {
        return next();
    } else {
        return res.redirect('/login');
    }
}
app.get('/login', (req, res) => {
    res.sendFile(__dirname+"/login.html");
});
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        req.session.user = user;
        res.redirect('/protected');
    } else {
        res.status(401).send('Invalid username or password');
    }
});
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});
app.get('/protected', authenticate, (req, res) => {
    res.send(`Welcome ${req.session.user.username}! This is a protected route. <a href="/logout">Logout</a>`);
});
app.listen(3500, () => {
    console.log(`Server is listening on port 3000`);
});