require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");



const server = express();

server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname,"client/build")));

const PORT = process.env.PORT||5000;

server.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "client/build","index.html"));
})

server.listen(PORT, ()=>{
    console.log(`The server is running at port ${PORT}`);
})