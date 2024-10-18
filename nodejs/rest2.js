const express = require('express');
const app = express();
app.use(express.json());
const courses = [
{id: 1, title: 'Node js'},
{id: 2, title: 'HTML'},
{id: 3, title: 'CSS'},
{id: 4, title: 'JS'},
]
app.get('/api/courses', (req,res)=> {
res.send(courses);
});
app.get('/api/courses/:id', (req, res) => {
const course = courses.find(c => c.id === parseInt(req.params.id));
if (!course) res.status(404).send('Not Found');
res.send(course);
});
app.post('/api/courses', (req, res)=> {
const course = {
id: courses.length + 1,
title: req.body.title
};
courses.push(course);
res.send(course);
});
app.put('/api/courses/:id', (req, res) => {
const course = courses.find(c=> c.id === parseInt(req.params.id));
if (!course) res.status(404).send('Not found');
course.title = req.body.title;
res.send(course);
});
app.delete('/api/courses/:id', (req, res) => {
const course = courses.find( c=> c.id === parseInt(req.params.id));
if(!course) res.status(404).send('Not Found');
const index = courses.indexOf(course);
courses.splice(index,1);
res.send(course);
});
app.listen(2000);