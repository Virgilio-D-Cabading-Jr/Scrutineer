/////////////////////////////////////////////////
//  PRODUCT CONTROLLER
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const Subject = require("../models/subject.model");

// //// CREATE //////////////////////////////////

module.exports.create = (req, res) => {
    Subject.create(req.body)
        .then(
            newlyCreatedSubject => res.json({ 
                subject: newlyCreatedSubject,
                message: "🍻🍻🍻 Create was successful 🍻🍻🍻"
            })
        )
        .catch(err => res.status(400).json(err ));
    };

// //// RETRIEVE ////////////////////////////////


// //// UPDATE //////////////////////////////////


// //// DELETE //////////////////////////////////