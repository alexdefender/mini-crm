const mongoose = require('mongoose');
const config = require('../config');
const connectionConfig = config.get('mongoose:options');

mongoose.connect(config.get('mongoose:uri'), connectionConfig, (error) => {
    if (error) console.error(error);
});
mongoose.connection.on('error', (error) => {
    console.error(`mongo connection error ${error}`);
});

module.exports = mongoose;
