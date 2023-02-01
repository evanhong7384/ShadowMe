const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  messageText: String,
  googleidFrom: String,
  googleidTo: String,
  sentTime: Date,
  readTime: Date
});

// compile model from schema
module.exports = mongoose.model("message", MessageSchema);
