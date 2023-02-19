const jwt = require("jsonwebtoken");
const User = require("../models/User");

const generateToken = (req, res) => {
  console.log(req.body);
  User.findOne({ username: req.body.username }).then((result) => {
    if (result) {
      if (req.body.password == result.password) {
        let token = jwt.sign({ id: result._id }, "SyEcUJJM8EpjHH7bS/S3Pw==");
        res.send(token);
      } else {
        res.sendStatus(404);
      }
    } else {
      res.sendStatus(404);
    }
  });
};

const verify = (req, res, next) => {
  let token = req.headers.authorization;
  console.log("TOKEN");
  console.log(token);
  jwt.verify(token, "SyEcUJJM8EpjHH7bS/S3Pw==", (err, user) => {
    if (err) return res.sendStatus(403);
  });
  next();
};

module.exports = { generateToken, verify };
