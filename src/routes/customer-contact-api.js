const express = require('express');
const router = express.Router();


const Contact = require('../models/contact');


// Route to create a member in database
router.post('/contactpage', async (req, res) => {
    try {
        first_name = req.body.first_name;
        last_name = req.body.last_name;
        email = req.body.email;
        phone = req.body.phone;
        message = req.body.message;
        const newmember = new Contact({
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone: phone,
            message: message,
        });
        const result = await newmember.save();
        res.send("Your Response Has been submitted");

    } catch (error) {
        console.log(error)
    }
});

router.get('/getallcustomers', async (req, res) => {
    try {

        let records = await Contact.find();
        res.send(records);
    } catch (error) {
        console.log(error)
    }
});


module.exports = router;

