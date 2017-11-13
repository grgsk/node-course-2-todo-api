'use strict';

const ObjectID = require('mongodb').ObjectID;

const mongoose = require('./../server/db/mongoose').mongoose;
const Todo = require('./../server/models/Todo').Todo;
const User = require('./../server/models/User').User;

let id = '5a031dd523b9a64a2a0b77af';

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
//
// Todo.findOneAndRemove().then((doc) => {
//   console.log(doc);
// })

Todo.findByIdAndRemove(id).then((doc) => {
  console.log(doc);
});
