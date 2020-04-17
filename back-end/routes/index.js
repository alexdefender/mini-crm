const CompanyController = require('../controllers').CompanyController;
const EmployeeController = require('../controllers').EmployeeController;
const UserController = require('../controllers').UserController;

module.exports = (app) => {
    app.get('/companies', CompanyController.find);
    app.post('/companies', CompanyController.add);
    app.put('/companies', CompanyController.updateOne);
    app.delete('/companies/:id', CompanyController.deleteOne);

    app.get('/employees', EmployeeController.find);
    app.post('/employees', EmployeeController.add);
    app.put('/employees', EmployeeController.updateOne);
    app.delete('/employees/:id', EmployeeController.deleteOne);

    app.put('/login', UserController.findOne);

    app.use((err, req, res, next) => {
        if (app.get('env') === 'development') {
            if (err.status) return res.status(err.status).send(err);
            res.status(500).send(err.message);
            next();
        } else {
            if (err.status) return res.sendStatus(err.status);
            res.sendStatus(400);
        }
    });
};
