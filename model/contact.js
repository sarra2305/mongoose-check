const mongoose = require('mongoose');

const ContactSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "foulen ben foulen",
    },
    age : {
        type: Number,
        default: 25,
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },


});

module.exports = mongoose.model('Contact', ContactSchema);