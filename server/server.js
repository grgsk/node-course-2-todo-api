'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const ObjectID = require('mongodb').ObjectID;

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

app.get('/todos', (req, res) => {
  Todo.find().then((docs) => {
    res.send({docs});
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos/:id', (req, res) => {
  // res.send(req.params);
  if( ObjectID.isValid(req.params.id) ){
    Todo.findById(req.params.id).then( (doc) => {
      if( !doc ){
        return res.status(404).send("Todo not found");
      }
      res.send(doc);
    } ).catch( (e)=> {
      res.status(400).send(e);
    } );
  } else {
    res.status(400).send("Invalid id");
  }

});

app.delete('/todos/:id', (req, res) => {
  //get the id
  let id = req.params.id;
  // validate the id -> not valid? 404
  if( !ObjectID.isValid(req.params.id) ){
    return res.status(400).send();
  }
  // remove todo by id
  Todo.findByIdAndRemove(id).then((todo) => {
    if( !todo ){
      return res.status(404).send("Todo not found");
    }
    res.status(200).send(todo);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.patch('/todos/:id', (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['text', 'completed']);

  if( !ObjectID.isValid(req.params.id) ){
    return res.status(400).send();
  }

  if( _.isBoolean(body.completed) && body.completed ){
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, { $set: body }, { new: true }).then( (todo) => {
    if( !todo ){
      return res.status(404).send("Todo not found");
    }

    res.status(200).send(todo);
  } ).catch((e) => {
    res.status(400).send(e);
  });
});

// POST /users

app.post('/users', (req, res) => {
  let body = _.pick(req.body, ['email', 'password']);

  // User.findByToken
  // user.generateAuthToken

  let user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken()
    // res.send(user);
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch((e) => {
    res.status(400).send(e);
  })
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
