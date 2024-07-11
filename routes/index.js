const express = require("express");
const { hello, sendMailer } = require ("../controller/controller");
const router = express();


router.get('/greetings', hello);
router.post('/sendMail', sendMailer);

module.exports = router;

