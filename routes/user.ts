import { Router } from "express";
const controller = require("./controllers/userController")

const userRouter = Router();

userRouter.post("/login", controller.login)
userRouter.post("/register", controller.register)

module.exports = userRouter;