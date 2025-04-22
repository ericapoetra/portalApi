const express = require("express");
const routes = express.Router();
const attachmentController = require("../controllers/attachmentController");

routes.post("/getAttachment", attachmentController.searchAttachment);

module.exports = { routes };
