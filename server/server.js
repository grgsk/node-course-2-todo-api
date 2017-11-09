'use strict';

const express = require('express');
const bodyParser = require('body-parser')

var mongoose = require('./db/mongoose.js').mongoose;
var Todo = require('./models/Todo').Todo;
var User = require('./models/User').User;

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
    let todo = new Todo({
      text: req.body.text
    });
    todo.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    })
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// let newTodo = new Todo({
//   text: 'Cook dinner',
//   completed: false,
//   completedAt: NaN
// });
//
// // newTodo.save().then((doc) => {
// //   console.log("Save todo", doc);
// // }, (e) => {
// //   console.log(e);
// // });
//
// let otherTodo = new Todo({
//   text: 'Do something',
//   completed: true,
//   completedAt: 12345
// });
//
// // otherTodo.save().then((doc) => {
// //   console.log("Save todo", doc);
// // }, (e) => {
// //   console.log(e);
// // });
//
// // User model
// // email - required, trim, String, minlength
//
//
// let user = new User({
//   email: 'grgml@example.com'
// });
//
// user.save().then((user) => {
//   console.log(user);
// }, (e) => {
//   console.log(e);
// })
