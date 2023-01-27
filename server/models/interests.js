
const mongoose = require("mongoose");

const InterestsSchema = new mongoose.Schema({
    googleid: String,
    medicalFields: [Boolean]
  });
  
module.exports = mongoose.model("interests", InterestsSchema);
