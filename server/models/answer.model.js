/////////////////////////////////////////////////
//  ANSWER MODEL
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const mongoose = require("mongoose");
const Factoid = require("./factoid.model");

// //// SCHEMA //////////////////////////////////
const AnswerSchema = new mongoose.Schema({
    info: String,
    questions: [ String ]
}, {timestamps: true}); // Timestamps implement createdAt/updatedAt

// //// MODEL ///////////////////////////////////
const Answer = mongoose.model("Answer", AnswerSchema );

// **** Export Model ********
module.exports = Answer;