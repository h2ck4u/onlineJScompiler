const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.index);
router.post('/run', controller.run);
router.post('/getAllQuiz', controller.getAllQuiz);
router.post('/getQuiz', controller.getQuiz);
router.post('/getAnswer', controller.getAnswer);
module.exports = router;