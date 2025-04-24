const express = require("express");
const routes = express.Router();
const attachmentController = require("../controllers/attachmentController");
const ondutyController = require("../controllers/onDutyLetterController");
const bankAccountController = require("../controllers/bankAccountController");

routes.post("/getAttachment", attachmentController.searchAttachment);
routes.post("/getOnDutyLetter", ondutyController.getOnDutyLetter);
routes.post("/getBankAccount", bankAccountController.getBankAccount);

module.exports = { routes };
