/////////////////////////////////////////////////
//  SUBJECT MODEL
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const mongoose = require("mongoose");
const Matter = require("./matter.model")

// //// SCHEMA //////////////////////////////////
const SubjectSchema = new mongoose.Schema({
    name: String,
    matters: [ Matter ]
}, {timestamps: true}); // Timestamps implement createdAd/updatedAt

// //// MODEL ///////////////////////////////////
const Subject = mongoose.model("Subject", SubjectSchema );

// **** Export Model ********
module.exports = Subject;