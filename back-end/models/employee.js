const mongoose = require('../database');
const { Schema } = mongoose;

const Employee = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    company: {
        type: mongoose.Schema.Types.String,
        ref: 'Company',
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
});

module.exports = mongoose.model('Employee', Employee);
