const express = require('express');
const router = express.Router();


const Member = require('../models/members');


// Route to create a member in database
router.post('/addmember', async (req, res) => {
    try {
        member_name = req.body.name;
        member_phone = req.body.phone;
        member_address = req.body.address;
        member_age = req.body.age;
        const newmember = new Member({
            name: member_name,
            phone: member_phone,
            address: member_address,
            age: member_age
        });
        const result = await newmember.save();
        if (!result) {
            res.statusCode = 404;
            res.send(res.statusCode);
        }
        res.statusCode = 200;
        res.send(res.statusCode);

    } catch (error) {
        console.log(error)
    }
});

// Route to get all members from database
router.get('/fetchmembers', async (req, res) => {
    try {

        const data = await Member.find();
        res.send(data);

    } catch (error) {
        console.log(error)
    }

});

router.patch('/updatemember/:id', async (req, res) => {
    try {
        const result = await Member.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!result) {
            res.statusCode = 404;
            res.send(res.statusCode);
        }
        res.statusCode = 200;
        res.send(res.statusCode);
    } catch (error) {
        res.statusCode = 404;
        res.send(res.statusCode);
    }
});
router.delete('/deletemember/:id', async (req, res) => {
    try {
        const response = await Member.findOneAndDelete({ _id: req.params.id });
        res.statusCode = 200;
        // res.send(response);
        res.send(res.statusCode);  // Query Please Consult !!!!! REMEMBER
    } catch (error) {
        res.statusCode = 404;
        res.send(error);
    }
});

module.exports = router;

