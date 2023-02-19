const Signale = require("../models/SignaleArea");

const addSignale = (req, res) => {
  let signale = new Signale(req.body);
  console.log(req.body);
  Signale.findOne({ lg: req.body.lg, alt: req.body.alt }).then((result) => {
    if (result == null) {
      signale
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

module.exports = {
  addSignale,
};
