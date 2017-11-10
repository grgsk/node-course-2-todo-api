'use strict';

const ObjectID = require('mongodb').ObjectID;

const mongoose = require('./../server/db/mongoose').mongoose;
const Todo = require('./../server/models/Todo').Todo;
const User = require('./../server/models/User').User;

let id = '5a031dd523b9a64a2a0b77af';

// if( !ObjectID.isValid(id) ){
//   console.log('ID not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log("Todos", todos);
// })
//
// Todo.findOne({
//   _id: id
// }).then((todos) => {
//   console.log("Todo", todos);
// });

// Todo.findById(id).then((doc) => {
//   console.log("Found by id", doc);
// }, (e) => {
//   console.log(e);
// }).catch((e) => {
//   console.log(e);
// })

// User findById
User.findById('5a0439f201258a2a8bc030f2').then( (doc) => {
  if( !doc ){
    return console.log("user not found");
  }
  console.log(doc);
}).catch((e) => {
  console.log(e);
});
