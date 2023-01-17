const mongoose = require('mongoose');

const Product_Schema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: String
    }
});
const Order_Schema = new mongoose.Schema({
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
    email: {
        type: String,
        required: true,
    },
    Order_status: {
        type: String,
        default: "Pending",
    },
    // Method 1
    Order_details: [Product_Schema]
    // Method 2

    // Order_details: [{
    //     name: {
    //         type: String
    //     },
    //     description: {
    //         type: String
    //     },
    //     price: {
    //         type: String
    //     }
    // }]



});

const Order = new mongoose.model('Order Detail', Order_Schema);  //First Attribute is the name of the collection

module.exports = Order;