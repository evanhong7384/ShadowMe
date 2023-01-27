const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
  institution: String,
  resume: String,
  linkedin: String,
  location: String,
  bio: String,
  medicalFields: [Boolean]
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
