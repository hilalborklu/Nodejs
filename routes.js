const { request, response } = require("express");
const express = require("express");
//const userModel = require("./user");
const router = express();
var bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");

//var urlEncodedParser = bodyParser.urlencoded({ extended: false });
var url =
  "mongodb+srv://hilalborklu:Hilal.34@cluster0.o3djt.mongodb.net/SmartSchool?retryWrites=true&w=majority";
var connection = mongoose.createConnection(url);

var storeModel = connection.model("user", require("./user.js"));
var thresholdModel = connection.model("threshold", require("./threshold.js"));

router.get("/users", async (request, response) => {
  //const user1 = await mongoose.model("Test", userModel, "Test");
  //var users = await user1.find({ storeId: 282, imwh: { $gte: 50 } }).exec();
  var users = await storeModel.find({ storeId: 282, imwh: { $gte: 50 } });
  //var users = await storeModel.find();

  response.send(users);
  console.log(users);
});

router.post("/imwh", async (request, response) => {
  // const date = request.body.date;
  const storeId = request.query.storeId;
  // const hour = request.body.hour;
  const imwh = request.query.imwh;

  //const user2 = await mongoose.model("Test", userModel, "Test");
  var users = await storeModel.find({ storeId: storeId, imwh: { $gte: imwh } });
  console.log(users);

  // const post = await users.find({
  //   date: date,
  //   storeId: storeId,
  //   hour: hour,
  //   imwh: imwh,
  // });

  thresholdModel.insertMany(users);
  response.send(users);
  //response.send("user is posted");
});

module.exports = router;
