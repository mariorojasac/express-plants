require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT

const plants = [
  "Monstera Deliciosa",
  "Corpse Flower",
  "Elephant-Foot Yam",
  "Witches' Butter",
];

app.get("/awesome", (req, res) => {
  res.send(`
    <h1>Plants are awesome!</h1>
    <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
  `);
});

app.get('/plants', (req, res) => {
  res.send('plant path')
})

app.get("/:indexOfPlantsArray", (req, res) => {
  res.send(plants[req.params.indexOfPlantsArray]);
});


app.get('/hello/:firstname/:lastname', (req, res) => {
  res.send(`Hello ${req.params.firstname} ${req.params.lastname}`)
})
 
app.get("/howdy/:firstName", function (req, res) {
  console.log(req.params);
  console.log(req.query);
  res.send("howdy " + req.query.title + " " + req.params.firstName);
});

app.listen(port, () => {
  console.log("listening on port", port);
});