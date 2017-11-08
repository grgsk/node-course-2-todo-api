const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log("Unable to connect to mongodb");
  }
  console.log("Successfully connected to mongodb");

  // db.collection('Todos').find({ completed: true }).toArray().then((docs) => {
  //   console.log('Todos:');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }).catch((err) => {
  //   console.log('Unable to fetch docs', err);
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
    // console.log(JSON.stringify(docs, undefined, 2));
  }).catch((err) => {
    console.log('Unable to fetch docs', err);
  });

  //db.close();
});
