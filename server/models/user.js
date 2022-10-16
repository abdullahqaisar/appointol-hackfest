const mongoose = require("mongoose");

const user= new mongoose.Schema({
  userName: {
    type: String,
  },
  userGender: {
    type: String,
  },
  userAge: {
    type: String,
  },
  TimeStamp: {
    type: String,
    default: (new Date()).getTime()
  },
  userSymptoms: {
    type: String,
  },
});

module.exports = mongoose.model("user", user);