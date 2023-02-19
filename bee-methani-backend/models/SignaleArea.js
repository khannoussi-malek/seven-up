const mongoose = require("mongoose");

let signaleSchema = mongoose.Schema({
  lg: { type: Number, required: true },
  lat: { type: Number, required: true },
});

let Signale = mongoose.model("Signale", signaleSchema);
module.exports = Signale;
