const express = require("express"); 
const morgan = require('morgan'); 


express()

.use(morgan('tiny'))

.get("/hello", (req, res) => {
    res.status(200).json({status: 200, message:"Hello!"})
})

.listen(8000, () => {
    console.log(`Server launched on port 8000`)
})