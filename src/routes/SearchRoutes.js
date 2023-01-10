const express = require("express");
const router = express.Router();
const mSearchController = require("../controllers/SearchController");

router.post("/bang", mSearchController.mSearchBang);
router.post("/status", mSearchController.mSearchStatus);
router.post("/req-gmail", mSearchController.mSearchGmail);



module.exports = router;