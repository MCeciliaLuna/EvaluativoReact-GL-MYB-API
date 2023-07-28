const { Router } = require("express");
const { getComments, createComments, voteComment, deleteComment } = require('../controllers/comment')
const router = Router();


router.get("/getComments", getComments);
router.post("/createComments", createComments);
router.put("/voteComment", voteComment);
router.delete("/deleteComment/:_id", deleteComment);


module.exports = router;