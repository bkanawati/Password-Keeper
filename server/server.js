const express = require('express');
const userController = require('./controllers/userController');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

const mongoURI = 'mongodb://localhost/mySavedPass';
mongoose.connect(mongoURI);

app.use(express.static(path.join(__dirname, './../client')));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../client/index.html'));
});

app.post('/', userController.createUser);
// app.post('/Login');

// app.get('/Userpage', (req, res) => {
//   userController.getAllUsers((err, users) => {
//     if (err) throw err;
//     res.sendFile(path.resolve(__dirname,'./../client/components/Userpage'));
//   });
// });

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});