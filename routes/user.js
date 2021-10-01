const router = require("express").Router();

router.get("/usertest", (req, res) => {
    res.send("success")
    console.log(req.body)
})

router.post("/usertest2", (req, res) => {
    const username = req.body.username;
    console.log(username);
    res.send(username);
})


module.exports = router;