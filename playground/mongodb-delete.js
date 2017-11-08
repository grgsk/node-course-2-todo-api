const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log("Unable to connect to mongodb");
  }
  console.log("Successfully connected to mongodb");

  // deleteMany
  // db.collection('Todos').deleteMany({ text: 'eat breakfast' })
  //   .then((result) => {
  //     console.log(result);
  //   });

  // deleteOne
  // db.collection('Todos').deleteOne({ text: 'eat lunch' })
  //   .then((result) => {
  //     console.log(result.result);
  //   });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({ completed: false })
  //   .then((result) => {
  //     console.log(result);
  //   });

  // db.collection('Users').deleteMany({ name: 'Grigor' })
  //   .then((res) => {
  //     console.log(res);
  //   });

  db.collection('Users').findOneAndDelete({ _id: new ObjectId("5a02e006287037a49c9c1117") })
    .then((res) => {
      console.log(res);
    });
  //db.close();
});
