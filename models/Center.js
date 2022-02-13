const mongoose = require("mongoose");
const validator = require('validator');

const CenterSchema = new mongoose.Schema({
    centername: {
        type: String,
        require: true,
        maxlength: 40
    },
    centercode: {
        type: String,
        require: true,
        minlength: 12,
        maxlength: 12,
        unique: true
    },
    address: {
        address1: String,
        city: String,
        state: String,
        pincode: Number

    },
    studentcapacity: {
        type: Number,
        require: true,
    },
    coursesOffered: {
        type: Array,
    },
    email: {
        type: String,
        require: true,
        unique: [true, "Email id already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invaild Email")
            }
        }
    },
    phone: {
        type: Number,
        require: true,
        unique: true,
    },
},
    { timestamps: true }
);

module.exports = mongoose.model("Center", CenterSchema);



