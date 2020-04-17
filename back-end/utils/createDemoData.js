const faker = require('faker');
const EmployeeModel = require('../models/employee');
const CompanyModel = require('../models/company');
const UserModel = require('../models/user');

const generateEmploees = (companyName) => {
    for (let i = 0; i < 3; i++) {
        const employee = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            company: companyName,
            email: faker.internet.email(),
            phone: faker.phone.phoneNumberFormat(0),
        };

        const newEmployee = new EmployeeModel(employee);
        newEmployee.save().catch((err) => {
            console.error(err);
        });
    }
};

const getCompany = () => ({
    name: faker.company.companyName(),
    email: faker.internet.email(),
    logo: faker.image.business(),
    website: faker.internet.url(),
});

const generateCompanies = () => {
    for (let i = 0; i < 100; i++) {
        const newCompany = new CompanyModel(getCompany());
        newCompany
            .save()
            .then((company) => {
                generateEmploees(company.name);
            })
            .catch((err) => {
                console.error(err);
            });
    }
};

const generateUser = () => {
    const admin = {
        email: 'admin@admin.com',
        password: 'password',
    };
    const user = new UserModel(admin);

    UserModel.findOne({ email: 'admin@admin.com' })
        .then((userAdmin) => {
            if (userAdmin) return;
            user.save();
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = (() => {
    generateCompanies();
    generateUser();
})();
