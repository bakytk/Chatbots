
const express = require('express');
const router = express.Router();

const { message_handler } = require('../controllers/message');

router.post("/nlp", message_handler)

module.exports = router;
