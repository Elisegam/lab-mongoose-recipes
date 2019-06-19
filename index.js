const mongoose = require("mongoose");
const Recipe = require("./models/Recipe"); // Import of the model Recipe from './models/Recipe'
const data = require("./data.js"); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
  .connect("mongodb://localhost/recipeApp", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Recipe.create({
  title: "cookies",
  level: "Easy Peasy",
  ingredient: [
    "salted butter",
    "sugar",
    "brow sugar",
    "vanilla",
    "eggs",
    "flour",
    "baking soda",
    "chocolate"
  ],
  cuisine: "american",
  dishType: "Snack",
  duration: 60,
  creator: "Elise"
})
  .then(dbRes => {
    console.log(dbRes.title);
  })
  .catch(err => console.log(err));

Recipe.insertMany(data)
  .then(dbRes => {
    console.log(dbRes);
  })
  .catch(err => console.log(err));

Recipe.updateOne({ title: "Rigatoni alla Genovese" }, { duration: 100 })
  .then(dbRes => {
    console.log(dbRes);
    console.log("The Rigatoni alla Genovese have been updated");
  })
  .catch(err => console.log(err));

Recipe.deleteOne({ title: "Carrot Cake" })
  .then(dbRes => {
    console.log("The Carrot Cake have been removed");
  })
  .catch(err => console.log(err));

mongoose.connection.close();
