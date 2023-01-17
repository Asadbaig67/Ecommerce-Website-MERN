const mongoose = require('mongoose');

const MongoConnection = () => {
    mongoose.connect("mongodb://localhost:27017/Fitnessfreaks")
        .then(() => { console.log("Connection Successfull With Mongodb") })
        .catch((err) => { console.log(err) });
}

module.exports = MongoConnection;
