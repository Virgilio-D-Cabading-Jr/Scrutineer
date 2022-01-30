/////////////////////////////////////////////////
//  MONGOOSE CONFIG
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const mongoose = require("mongoose");
const DATABASE_NAME = "practice_4_db";

// //// CONNECT SERVER TO DATABASE //////////////
mongoose.connect("mongodb://localhost/" + DATABASE_NAME )
	.then(() => console.log("🌈🌈🌈 Established a connection to the database 🌈🌈🌈"))
	.catch(err => console.log(`🤷🤷🤷 Something went wrong when connecting to the database 🤷🤷🤷`, err));