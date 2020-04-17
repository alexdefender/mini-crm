const express = require('express');
const app = express();

require('./database');
// require('./utils/createDemoData');
require('./boot/express')(app);
require('./routes/index')(app);

module.exports = app;
