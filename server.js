require("dotenv").config()
const { PORT = 4000, NODE_ENV = "development" } = process.env

const mongoose = require("./db/connection")

const cors = require("cors")
const corsOptions = require("./configs/cors")

const express = require("express")
const app = express()

const morgan = require("morgan")
const personRouter = require("./controllers/personRoutes")
const signRouter = require("./controllers/signRoutes")

//middleware
NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(express.json());
app.use(morgan("tiny")); 

//test route
app.get("/", (req, res) => {
    res.json({ hello: "Hello World!" });
  });

//Routes to router
app.use("/name", personRouter)
app.use("/sign", signRouter)


app.listen(PORT, () => {
    console.log(`Your are listening on port ${PORT}`);
  });