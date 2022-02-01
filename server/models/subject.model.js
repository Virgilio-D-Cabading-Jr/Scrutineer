/////////////////////////////////////////////////
//  SUBJECT MODEL
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const mongoose = require("mongoose");
const Matter = require("./matter.model")

// //// SCHEMA //////////////////////////////////
const SubjectSchema = new mongoose.Schema({
    name: String,
    category: String,
    Answers : [
        {
            Answer: String,
            Questions: [ String ]
        }
    ]
}, {timestamps: true}); // Timestamps implement createdAd/updatedAt

// //// MODEL ///////////////////////////////////
const Subject = mongoose.model("Subject", SubjectSchema );

// **** Export Model ********
module.exports = Subject;