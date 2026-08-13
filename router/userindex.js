const express = require("express");
const router = express.Router();
const us=require("../controller/user");
const em = require("../controller/email");

router.get("/getuserdata", us.getUserData);
router.post("/insertuserdata", us.insertUserData);
router.put("/updateuserdata/:id", us.updateUserData);
router.delete("/deleteuserdata/:id", us.deleteUserData);

router.post("/sendmail", em.sendMail);

module.exports = router;