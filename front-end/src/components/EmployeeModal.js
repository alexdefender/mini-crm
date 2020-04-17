import React from 'react';
import { useDispatch } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { addItemData, editItemData } from '../store/thunk/listData';

const EmployeeModal = React.forwardRef((props, ref) => {
    const dispatch = useDispatch();
    const { selectedItemMenu, selectedEmployee, classesList, closeModal } = props;
    let { email, company, firstName, lastName, phone, _id, isEdit } = selectedEmployee;

    const handleSubmit = (e) => {
        e.stopPropagation();
        const employee = {
            firstName: firstName.children[1].children[0].value,
            lastName: lastName.children[1].children[0].value,
            email: email.children[1].children[0].value,
            company: company.children[1].children[0].value,
            phone: phone.children[1].children[0].value,
        };

        if (isEdit) {
            employee._id = _id;
            dispatch(editItemData(selectedItemMenu, employee));
        } else {
            dispatch(addItemData(selectedItemMenu, employee));
        }
        closeModal();
    };

    const checkEdit = (value) => (isEdit ? value : '');

    const form = (
        <form className={classesList}>
            <TextField
                id='firstName'
                label='First Name'
                defaultValue={checkEdit(firstName)}
                ref={(r) => {
                    firstName = r;
                }}
                required
            />
            <TextField
                id='lastName'
                label='Last Name'
                defaultValue={checkEdit(lastName)}
                ref={(r) => {
                    lastName = r;
                }}
                required
            />
            <TextField
                id='email'
                label='Email'
                defaultValue={checkEdit(email)}
                ref={(r) => {
                    email = r;
                }}
            />
            <TextField
                id='company'
                label='Comnapy'
                defaultValue={checkEdit(company)}
                ref={(r) => {
                    company = r;
                }}
            />
            <TextField
                id='phone'
                label='Phone'
                defaultValue={checkEdit(phone)}
                ref={(r) => {
                    phone = r;
                }}
            />
            <Button variant='contained' onClick={handleSubmit}>
                Save
            </Button>
        </form>
    );

    const viewList = (
        <List component='ul' className={classesList}>
            <ListItem>
                <ListItemText primary={firstName} />
            </ListItem>
            <ListItem>
                <ListItemText primary={lastName} />
            </ListItem>
            <ListItem>
                <ListItemText primary={email} />
            </ListItem>
            <ListItem>
                <ListItemText primary={company} />
            </ListItem>
            <ListItem>
                <ListItemText primary={phone} />
            </ListItem>
        </List>
    );

    const renderEmployee = !isEdit && company ? viewList : form;

    return renderEmployee;
});

export default EmployeeModal;
