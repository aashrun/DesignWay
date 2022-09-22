const express = require('express');
const router = express.Router();
const authorController = require("../controllers/authorController.js")




//================================  Handlers  ========================================//

router.post("/author/register", authorController.createAuthor)

router.get("/author/getToDoList/:authorId", authorController.getToDoList)

router.delete("/author/deleteTask/:authorId", authorController.deleteTask)

router.put("/author/updateTask/:authorId", authorController.updateTask)




//====================================  Invalid API  ==========================================//
router.all("/**", function (req, res) {
    res.status(404).send({
        status: false,
        msg: "The api you requested is not available!"
    })
})


module.exports = router;