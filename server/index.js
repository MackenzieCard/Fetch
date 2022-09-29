const express = require("express"); 
const morgan = require('morgan'); 

const { getUsers, getUser, addNewUser, updateExistingUser, getStatus, getStatuses, addNewStatus } = require("./handlers");


express()
.use(express.json())

.use(morgan('tiny'))


// REST Endpoints 
.get("/api/get-users", getUsers)
.get("/api/get-users/:userId", getUser)
.get("/api/get-statuses", getStatuses)
.get("/api/get-status/:statusId", getStatus)

.post("/api/add-user", addNewUser)
.post("/api/add-status", addNewStatus)

.patch("/api/update-user/:userId", updateExistingUser)

.listen(8000, () => {
    console.log(`Server launched on port 8000`)
});

