/////////////////////////////////////////////////
//  SERVER JAVASCRIPT
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 8000;

// //// MIDDLE-WARE /////////////////////////////
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());    // enable Cross Origin Requests in Project

// INITIALIZE SERVER CONNECTION TO DATABASE /////
require("./config/mongoose.config");

// //// IMPLEMENT ROUTES ////////////////////////
const AllRoutes = require("./routes/subject.route");
AllRoutes(app);

// //// EXECUTE SERVER //////////////////////////
app.listen(PORT, () => console.log(`🦄🦄🦄 The server is all fired up on port ${PORT} 🦄🦄🦄`));