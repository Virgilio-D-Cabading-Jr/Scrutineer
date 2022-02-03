/////////////////////////////////////////////////
//  SUBJECT MODEL
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const mongoose = require("mongoose");

// //// SCHEMA //////////////////////////////////
const SubjectSchema = new mongoose.Schema({
    name: String,
    category: String,
    imgUrl: String,
    answers : [
        {
            info: String,
            questions: [ String ]
        }
    ]
}, {timestamps: true}); // Timestamps implement createdAd/updatedAt

// //// MODEL ///////////////////////////////////
const Subject = mongoose.model("Subject", SubjectSchema );

// **** Export Model ********
module.exports = Subject;