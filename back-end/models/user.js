const mongoose = require('../database');
const { Schema } = mongoose;

const User = new Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    },
});

module.exports = mongoose.model('User', User);
