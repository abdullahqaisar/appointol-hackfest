const express = require("express");
const { default: mongoose } = require("mongoose");

const userModel = require("./models/user");

const app = express();
app.use(express.json());

//connection
const CONNECTION_STRING =
  "mongodb+srv://abdul:abdul1090@admin0.zlcut45.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_STRING);

app.post("/api/addpatient", async (req, res) => {
  try {
    const {
      name,
      userName,
      userGender,
      userAge,
      userSymptoms,
      userContact,
      rdocter,
      rChecked,
    } = req.body;
    const user = new userModel({
      name,
      userName,
      userGender,
      userAge,
      userSymptoms,
      userContact,
      rdocter,
      rChecked,
    });
    await user.save();
    res.send(user);
  } catch (err) {
    console.log(err);
  }
});


app.get("/api/getuser", async (req, res) => {
  const users = await userModel.find({});
  res.send(users);
});

app.get("/api/getUsersForRecep", (req, res) => {
  userModel.find({ rChecked: false }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.get("/api/getUsersForDocter", (req, res) => {
  userModel.find({ rdocter: false, rChecked: true }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
app.put("api/updateUser/:id", (req, res) => {
  userModel.findByIdAndUpdate(
    req.params.id,
    { $set: { userSymptoms: "no" } },
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    }
  );
});

app.listen(3000, () => {
  console.log("working");
});
