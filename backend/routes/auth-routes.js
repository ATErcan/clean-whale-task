const { Router } = require("express");

const router = Router();

router.get("/local", (req, res) => res.send("Login!"));

module.exports = router;