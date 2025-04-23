const express = require("express");
const routes = express.Router();
const attachmentController = require("../controllers/attachmentController");
const ondutyController = require("../controllers/onDutyLetterController");

routes.post("/getAttachment", attachmentController.searchAttachment);
routes.post("/getOnDutyLetter", ondutyController.getOnDutyLetter);

module.exports = { routes };
