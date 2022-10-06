const express = require("express"); 
const morgan = require('morgan'); 

const { getUsers, getUser, addNewUser, updateExistingUser, getStatus, getStatuses, addNewStatus, getUserById, getPlaydatesByUser, updatePlaydate  } = require("./handlers");


express()
.use(express.json())

.use(morgan('tiny'))


// REST Endpoints 
.get("/api/get-users", getUsers)
.get("/api/get-user/:userId", getUserById)
.post("/api/get-user", getUser)
.get("/api/get-statuses", getStatuses)
.get("/api/get-status/:statusId", getStatus)
.get("/api/get-playdates/:userEmail", getPlaydatesByUser)

.post("/api/add-user", addNewUser)
.patch("/api/update-playdate", updatePlaydate)

.post("/api/add-status", addNewStatus)


.patch("/api/update-user/:userId", updateExistingUser)
// Patch to accept or decline playdates 
// .patch("/api-update-playdate-status", updatePlaydateStatus)

.listen(8000, () => {
    console.log(`Server launched on port 8000`)
});

