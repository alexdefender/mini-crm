const mongoose = require('../database');
const { Schema } = mongoose;

const Company = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    logo: {
        type: String,
    },
    website: {
        type: String,
    },
});

module.exports = mongoose.model('Company', Company);
