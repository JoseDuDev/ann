const locals = require("../controllers/local.controller.js");
var router = require("express").Router();
// Create a new Tutorial
router.post("/", locals.create);
// Retrieve all Tutorials
router.get("/", locals.findAll);
// Retrieve all published Tutorials
router.get("/liberados", locals.findAllLiberados);
// Retrieve a single Tutorial with id
router.get("/:id", locals.findOne);
// Update a Tutorial with id
router.put("/:id", locals.update);
// Delete a Tutorial with id
router.delete("/:id", locals.delete);

module.exports = router;
