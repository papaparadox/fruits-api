const express = require("express");
const fruitsRouter = express.Router();

const fruitController = require("../controllers/fruitController");

fruitsRouter.get("/", fruitController.showAllFruits);
fruitsRouter.get("/:name", fruitController.show);
fruitsRouter.post("/", fruitController.createFruit);
fruitsRouter.patch("/:name", fruitController.updateFruit);
fruitsRouter.delete("/:name", fruitController.deleteFruit);

module.exports = fruitsRouter;
