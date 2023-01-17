const express = require('express');
const router = express.Router();


const Order = require('../models/order');


// Route to create a customer in database
router.post('/postorder', async (req, res) => {
    try {
        customer_name = req.body.name;
        customer_phone = req.body.phone;
        customer_address = req.body.address;
        customer_email = req.body.email;
        items = req.body.Order_details;

        const customer = new Order({
            name: customer_name,
            phone: customer_phone,
            address: customer_address,
            email: customer_email,
            Order_details: items
        });
        // const result = await customer.save();
        await customer.save();
        res.statusCode = 200;
        res.send(res.statusCode);

    } catch (error) {
        res.statusCode = 400;
        res.send(res.statusCode);
    }
});

// Route to get all customers from database
router.get('/allorders', async (req, res) => {
    try {

        const result = await Order.find();
        res.statusCode = 200;
        // res.send(res.statusCode);
        res.send(result);

    } catch (error) {
        res.statusCode = 404;
        res.send(res.statusCode);
        console.log(error)
    }
});

router.get('/SpecificUserOrder/:name', async (req, res) => {
    try {

        const result = await Order.find({ name: req.params.name });
        res.send(result);

    } catch (error) {
        console.log(error)
    }
});

router.patch('/updateorder/:id', async (req, res) => {
    try {
        const response = await Order.findOneAndUpdate({ _id: req.params.id }, { $set: { Order_status: "Complete" } }, { new: true });
        // res.send(response); // Query Please Consult !!!!! REMEMBER
        res.statusCode = 200;
        res.send(res.statusCode);
    } catch (error) {
        res.send(error);
    }
});
router.delete('/deleteorder/:id', async (req, res) => {
    try {
        const response = await Order.findOneAndDelete({ _id: req.params.id });
        res.send(response); // Query Please Consult !!!!! REMEMBER
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;


