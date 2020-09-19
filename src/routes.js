const { Router } = require("express");
const { routes, route } = require("./app");
const { User } = require("./app/models");
const authMiddleware = require("../src/app/middlewares/auth");

const router = Router();

const SessionController = require("./app/controllers/SessionController");

router.post("/session", SessionController.store);

router.use(authMiddleware);
router.get("/dashboard", (req,res) => {
    return res.status(200).send();
});

module.exports = router;