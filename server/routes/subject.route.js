/////////////////////////////////////////////////
//  SUBJECT ROUTES
/////////////////////////////////////////////////

const SubjectController = require("../controllers/subject.controller");

module.exports = function(app) {
    // **** Create ******************************
    app.post("/api/subjects", SubjectController.create );

    // **** Retrieve ****************************
    app.get("/api/subjects", SubjectController.findAll );
    app.get("/api/subjects/:id", SubjectController.fineOne );

    // **** Update ******************************
    app.put("/api/subjects/:if", SubjectController.update );

    // **** Delete ******************************
    app.delete("/api/authors/delete/:id", AuthorController.deleteAuthor);
}