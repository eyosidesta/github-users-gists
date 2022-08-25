const express = require("express");
const router = express.Router();

const GitUserController = require('../conttrollers/GitUserController');


router.get('/:username', GitUserController.get_all_user_gists);

module.exports = router;