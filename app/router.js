const express = require("express");

const router = express.Router();
const usersController = require("./controllers/usersController");
const cartController = require("./controllers/cartController");

const usersMiddleware = require("./middlewares/usersMiddleware");

router.post("/api/login", usersMiddleware.validateBodyLogin, usersController.authenticate);
router.post("/api/cadastro", usersController.insert);
router.get("/api/getcarrinho/:id", cartController.getCart); 
router.post("/api/setcarrinho", cartController.setCart);
router.get("/api/getperfilusuario/:id", usersController.getUserProfile);
router.put("/api/setperfilusuario/:id", usersController.updateUser);


module.exports = router;