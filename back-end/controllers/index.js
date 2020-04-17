const Company = require('../models/company');
const Employee = require('../models/employee');
const User = require('../models/user');

class Controller {
    constructor(model) {
        this.model = model;
        this.add = this.add.bind(this);
        this.find = this.find.bind(this);
        this.findOne = this.findOne.bind(this);
        this.updateOne = this.updateOne.bind(this);
        this.deleteOne = this.deleteOne.bind(this);
        this._sendError = this._sendError.bind(this);
        this._sendData = this._sendData.bind(this);
    }

    add(req, res, next) {
        const newModel = new this.model(req.body);
        newModel
            .save()
            .then((model) => this._sendData(res, model))
            .catch((err) => this._sendError(err, next));
    }

    find(req, res, next) {
        this.model
            .find()
            .then((models) => this._sendData(res, models))
            .catch((err) => this._sendError(err, next));
    }

    findOne(req, res, next) {
        const { email, password } = req.body;
        this.model
            .findOne({ email, password })
            .then((user) => {
                if (user) return res.sendStatus(200);
                return res.sendStatus(400);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    updateOne(req, res, next) {
        this.model
            .updateOne({ _id: req.body._id }, req.body)
            .then((model) => this._sendData(res, model))
            .catch((err) => this._sendError(err, next));
    }

    deleteOne(req, res) {
        const { id } = req.params;
        this.model
            .deleteOne({ _id: id })
            .then(() => this._sendData(res, { id }))
            .catch((err) => this._sendError(err, next));
    }

    _sendError(err, next) {
        return next({
            status: 400,
            message: err.message || err,
        });
    }
    _sendData(res, data) {
        res.status(200).send(data);
    }
}

module.exports.CompanyController = new Controller(Company);
module.exports.EmployeeController = new Controller(Employee);
module.exports.UserController = new Controller(User);
