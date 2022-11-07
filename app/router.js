const express = require("express");

const router = express.Router();
const usersController = require("./controllers/usersController");
const cartController = require("./controllers/cartController");

router.post("/login", usersController.authenticate);
router.post("/cadastro", usersController.insert);
router.post("/getcarrinho", cartController.getCart); 
router.post("/setcarrinho", cartController.setCart);

module.exports = router;