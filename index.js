const express = require('express')
const app = express()
const dbConfig = require('./config/dbConfig')
const cors = require('cors')

app.use(cors())
const portfolioRoute = require("./routes/portfolioRoute")
app.use(express.json());
app.use("/api/portfolio/",portfolioRoute);
app.use(express.static("dist"))


const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})

