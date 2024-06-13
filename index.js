const express = require('express')
const app = express()
const dbConfig = require('./config/dbConfig')
require("dotenv").config();

const portfolioRoute = require("./routes/portfolioRoute")
app.use(express.json());
app.use("/api/portfolio/",portfolioRoute);


const port = process.env.PORT || 5001;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})
