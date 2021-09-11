const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName:{
    type: String,
  },
  email:{
    type: String,
  },
  username:{
    type:String
  },
  password:{
    type:String
  }

});

module.exports = mongoose.model("User", userSchema);
