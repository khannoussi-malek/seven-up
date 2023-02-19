const User = require("../models/User");
const ObjectId = require("mongodb").ObjectID;

const addUser = (req, res) => {
  let user = new User(req.body);
  User.findOne({ username: req.body.username }).then((result) => {
    if (result == null) {
      user
        .save()
        .then((result) => {
          res.json({ err: false });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("exist");
      res.json({ err: true });
    }
  });
};

const getUser = (req, res) => {
  let id = ObjectId(req.params.id);
  console.log(id);
  User.findOne({ _id: id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  addUser,
  getUser,
};
