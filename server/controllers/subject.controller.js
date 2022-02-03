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
                message: "🍻🎉🍻 Create was successful 🍻🎉🍻"
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
                subjects: allSubjects,
                message: "🦄🦄🦄 Success: Found All 🦄🦄🦄"
            })
        )
        .catch(err => res.status(400).json(err ));
};

// **** Find One ********
module.exports.fineOne = (req, res) => {
    Subject.findById(req.params.id)
        .then(
            oneSubject => res.json ({
                subject: oneSubject,
                message: "🌈🌈🌈 Success: Found one 🌈🌈🌈"
            })
        )
        .catch(err => res.status(400).json(err ));
};

// //// UPDATE //////////////////////////////////

module.exports.update = (req,res) => {
    Subject.findByIdAndUpdate( req.params.id, req.body, 
        { new: true, runValidators: true })
        .then(
            updatedSubject => res.json({
                subject: updatedSubject,
                message: "🍔🍔🍔 Success: Update 🍔🍔🍔"
            })
        )
        .catch(err => res.status(400).json(err ));
};

// //// DELETE //////////////////////////////////

module.exports.delete = (req, res) => {
    Subject.findByIdAndDelete(req.params.id)
        .then(
            result => res.json ({
                result: result,
                message: "🍕🍕🍕 Success: Delete  🍕🍕🍕"
            })
        )
        .catch(err => res.status(400).json(err ));
};