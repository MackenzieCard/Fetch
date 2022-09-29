const express = require("express"); 
const morgan = require('morgan'); 

const { getUsers, getUser, addNewUser, updateExistingUser } = require("./handlers");


express()
.use(express.json())

.use(morgan('tiny'))


// .get("/hello", (req, res) => {
//     res.status(200).json({status: 200, message:"Hello!"})
// })

// REST Endpoints 
.get("/api/get-users", getUsers)
.get("/api/get-users/:userId", getUser)

.post("/api/add-user", addNewUser)

.patch("api/update-user/:userId", updateExistingUser)

.listen(8000, () => {
    console.log(`Server launched on port 8000`)
});

