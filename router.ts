import { Router } from "express";
const userRouter = require("./routes/user")

const mainRouter = Router();

mainRouter.use("/user", userRouter)

module.exports = mainRouter;
