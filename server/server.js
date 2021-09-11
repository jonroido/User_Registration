const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/Users");

const db = "mongodburi";
mongoose.connect(db, { useNewUrlParser: true,useUnifiedTopology: true });

mongoose.connection.once("open", () => {
  console.log("Mongodb connection established successfully");
});

const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());

//get all
app.get("/", (req, res) => {
  User.find((err, users) => {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});

//get one
app.get("/:id", (req, res) => {
  const id = req.params.id;
  User.findById(id, (err, user) => {
    res.json(user);
  });
});

//create one
app.post("/", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

//put one
app.put("/:id", (req, res) => {
  const id = req.params.id;
  User.findById(id, (err, user) => {
    if (!user) {
      res.status(404).send("User not found");
    } else {
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.email = req.body.email;
      user.username = req.body.username;
      user.password = req.body.password;
      user
        .save()
        .then((user) => {
          res.json(user);
        })
        .catch((err) => res.status(500).send(err.message));
    }
  });
});

//delete one 
app.delete("/:id",  (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});


app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
