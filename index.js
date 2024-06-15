const express = require('express')
const app = express()
const path = require('path')
const dbConfig = require('./config/dbConfig')
const cors = require('cors')
require("dotenv").config();

const portfolioRoute = require("./routes/portfolioRoute")
app.use(express.json());
app.use(cors())
app.use("/api/portfolio/",portfolioRoute);



const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})

