const config = require('../config');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = (app) => {
    app.use(cors());
    app.use(
        bodyParser.urlencoded({
            extended: false,
        })
    );
    app.use(bodyParser.json());

    const port = config.get('port');
    app.listen(port, () => {
        console.log(`CRM listening on port ${port}`);
    });

    process.on('uncaughtException', (err) => console.error('uncaught exception:', err));
    process.on('unhandledRejection', (error) => console.error('unhandled rejection:', error));
};
