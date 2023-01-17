const mongoose = require('mongoose');

const Machinery_Schema = new mongoose.Schema({
    machine_name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
    }
});

const Machine = new mongoose.model('Machinery Detail', Machinery_Schema);

module.exports = Machine;