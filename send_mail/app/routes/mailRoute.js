const express = require('express');
const mail = require('../controllers/MailControllers')

const router = express.Router();


router.post('/sendmail', mail.sendMail);
router.post('/contactmail', mail.contactMail);

module.exports = router;