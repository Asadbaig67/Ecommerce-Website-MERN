const mongoose = require('mongoose');

const Memeber_Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }

});

const Member = new mongoose.model('Memeber Detail', Memeber_Schema);

module.exports = Member;