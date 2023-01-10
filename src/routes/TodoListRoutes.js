const express = require("express");
const router = express.Router();
const upload = require("../util/excle")
const mTodoListController = require("../controllers/TodoListController");
const mVerifyToken = require("../middlewares/VerifiToken")

router.get("/get-list", mVerifyToken.mVerifyToken, mTodoListController.mGetTodoList);

router.post("/create", mVerifyToken.mVerifyToken, mTodoListController.mCreateTodoList);

router.post("/update-byId", mVerifyToken.mVerifyToken, mTodoListController.mUpdateTodoList);

router.post("/delete-all", mVerifyToken.mVerifyToken, mTodoListController.mDeleteTodoList);

router.post("/delete-byId", mVerifyToken.mVerifyToken, mTodoListController.mDeleteTodoListById);

router.post("/create-file-ex", upload.single("excel"), mTodoListController.mCreateTodolistArr);



module.exports = router;