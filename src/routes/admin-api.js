const express = require('express');
const path = require('path');
const bcryptjs = require('bcryptjs');
const router = express.Router();


const Admin = require('../models/admin');


// Route to create a student in database
router.post('/login', async (req, res) => {
    try {
            
        const email = req.body.email;
        const user = await Admin.findOne({ email });
        if (user === null) {
            const newadmin = new Admin({
                email: email,
                password: password
            });
            await newadmin.save();
            // res.send("Admin Not Found")
        }
        else {
            const hash = await bcryptjs.compare(req.body.password, user.password);
            if (!hash) {
                res.send('Admin Not Found');
            }
            else {
                // res.sendFile(path.join(__dirname,'../../public/admin.html'));
                res.render('admin');
            }
        }

    } catch (error) {
        res.statusCode = 401;
        res.send(error);
    }
})

module.exports = router;


