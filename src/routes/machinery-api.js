const express = require('express');
const router = express.Router();

const Machine = require('../models/machinery');


// Route to create a customer in database
router.post('/addmachinery', async (req, res) => {
    try {

        m_name = req.body.machine_name;
        quantity = req.body.quantity;
        const newmachine = new Machine({
            machine_name: m_name,
            quantity: quantity
        });
        await newmachine.save();
        res.statusCode = 200;
        res.send(res.statusCode);


    } catch (error) {
        res.statusCode = 404;
        res.send(res.statusCode);
    }

});

// Route to get all customers from database
router.get('/fetchmachinery', async (req, res) => {
    try {

        const data = await Machine.find();
        res.send(data);

    } catch (error) {
        console.log(error)
    }

});

router.patch('/updatemachinery/:name', async (req, res) => {
    try {
        const result = await Machine.findOneAndUpdate({ machine_name: req.params.name }, req.body, { new: true });
        if (result) {
            res.statusCode = 200;
            res.send(res.statusCode);
        }
        else {
            res.statusCode = 404;
            res.send(res.statusCode);
        }
    } catch (error) {

        res.statusCode = 404;
        res.send(res.statusCode);

    }
});
router.delete('/deletemachinery/:name', async (req, res) => {
    try {
        const result = await Machine.findOneAndDelete({ machine_name: req.params.name });
        if (result) {
            res.statusCode = 200;
            res.send(res.statusCode);
        }
        else {
            res.statusCode = 404;
            res.send(res.statusCode);
        }
    } catch (error) {
        // res.statusCode = 401;
        res.send(error);
    }
});

module.exports = router;


