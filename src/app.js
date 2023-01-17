const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const MongoConnection = require('./database/connection');
const Admin_Routes = require("./routes/admin-api");
const Order_Routes = require("./routes/Order-api");
const Machine_Routes = require("./routes/machinery-api");
const Member_Routes = require("./routes/member-api");
const Contact_Routes = require("./routes/customer-contact-api");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Database connection
MongoConnection();

// View Engine Setup
app.set('view engine', 'hbs');

// Getting Paths Of Folder
StaticPath = path.join(__dirname, '../public');


app.use(express.static(StaticPath));

// app.get('/', (req, res) => {
//     res.send('Back End');
// });


// ROUTES
app.use(Admin_Routes);
app.use(Order_Routes);
app.use(Machine_Routes);
app.use(Member_Routes);
app.use(Contact_Routes);


app.listen(port, () => {
    console.log(`Connection Successful at port ${port}`)
})


