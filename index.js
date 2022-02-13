const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const centerRoute = require('./routes/centers');


const app = express();
app.use(cors())

mongoose.connect('mongodb://localhost:27017/centerdb').then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

app.use(express.json());

app.use("/api/centers", centerRoute);

app.listen(8800, () => {
    console.log("Backend is running")
})




