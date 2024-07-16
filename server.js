const express = require('express');
const app = express();

const db = require('./db'); // Assuming db.js is properly setting up the database connection
const bodyParser = require('body-parser');
const person = require('./person');
const drinkitems=require('./drinks');

app.use(bodyParser.json()); // Use bodyParser middleware to parse JSON data

app.get('/', (req, res) => {
  res.send('Welcome to my hotel!');
});

// POST route to add a person
//import router files for person
const personroute=require('./routes/personroutes');
const menuroute=require('./routes/menuRoutes');
const drinkroute=require('./routes/drinksRoutes');

//to use the person route
app.use('/person',personroute);
app.use('/menuitem',menuroute);
app.use('/drinkitem',drinkroute);





// Uncomment these routes if you want to add more functionalities
// app.get('/chicken', (req, res) => {
//   res.send("I would love to serve you chicken");
// });

// app.get('/idli', (req, res) => {
//   let customizedIdli = {
//     name: "Rava Idli",
//     size: 10,
//     isSambar: true,
//     isChutney: false
//   }
//   res.send(customizedIdli);
// });

// app.post('/items', (req, res) => {
//   console.log('Data is saved');
//   res.send("Data is received successfully");
// });

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
