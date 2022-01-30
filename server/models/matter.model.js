/////////////////////////////////////////////////
//  MATTER MODEL
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const mongoose = require("mongoose");
const Factoid = require("./factoid.model");

// //// SCHEMA //////////////////////////////////
const MatterSchema = new mongoose.Schema({
    name: String,
    factoids: [ Factoid ]
}, {timestamps: true}); // Timestamps implement createdAt/updatedAt

