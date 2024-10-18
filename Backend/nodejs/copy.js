const express = require('express');
const app = express();
const port = 3001;
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' }
];
app.use(express.json());
function authenticate(req, res, next) {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // If user is found, attach user object to request object for further use
    req.user = user;
    next(); // Call the next middleware or route handler
  } else {
    res.status(401).send('Authentication failed');
  }
}
app.get('/restricted', authenticate, (req, res) => {
  res.send(`Welcome, ${req.user.username}! This is a restricted resource.`);
});
app.get('/public', (req, res) => {
  res.send('This is a public resource.');
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
