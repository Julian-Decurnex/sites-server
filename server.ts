import { PrismaClient } from "@prisma/client";
import express from "express";
const mainRouter = require("./router")
const cookieSession = require("cookie-session");
const cors = require("cors");

export const prisma = new PrismaClient();

const server = express()
server.use("/", mainRouter)

server.use(express.json());

//COOKIES
server.use(
  cookieSession({
    name: "session",
    keys: ["PF"],
    maxAge: 7 * 24 * 60 * 60 * 100,
  })
);

//CORS
server.use(
    cors({
      origin: process.env.CLIENT_URL,
      methods: "GET, POST, PUT, DELETE",
      credentials: true,
    })
  );

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(
    "SERVER RUNNING ON PORT 3001"
  );
}).on("error", function (err) {
  process.once("SIGUSR2", function () {
    process.kill(process.pid, "SIGUSR2")
  })
  process.on("SIGINT", function () {
    process.kill(process.pid, "SIGINT")
  })
  process.on("uncaughtException", function (err) {
    console.log("UNCAUGHT EXCEPTION")
  })
})