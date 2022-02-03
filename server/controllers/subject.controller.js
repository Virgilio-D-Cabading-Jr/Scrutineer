/////////////////////////////////////////////////
//  SUBJECT CONTROLLER
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const Subject = require("../models/subject.model");

// //// CREATE //////////////////////////////////

module.exports.create = (req, res) => {
    Subject.create(req.body)
        .then(
            newlyCreatedSubject => res.json({ 
                subject: newlyCreatedSubject,
                message: "🌈🌈🌈 Create was successful 🌈🌈🌈"
            })
        )
        .catch(err => res.status(400).json(err ));
    };

// //// RETRIEVE ////////////////////////////////

// **** Find All ********
module.exports.findAll = (req, res) => {
    Subject.find()
        .then( allSubjects => 
            res.json({
                authors: allSubjects,
                message: "🦄🦄🦄 Success: Found All 🦄🦄🦄"
            })
        )
        .catch(err => res.status(400).json(err ));
};

// //// UPDATE //////////////////////////////////


// //// DELETE //////////////////////////////////