import React from 'react';
import { useDispatch } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { addItemData, editItemData } from '../store/thunk/listData';

const CompanyModal = React.forwardRef((props, ref) => {
    const dispatch = useDispatch();
    const { selectedItemMenu, selectedCompany, classesList, closeModal } = props;
    let { email, logo, name, website, _id, isEdit } = selectedCompany;

    const handleSubmit = (e) => {
        e.stopPropagation();
        const company = {
            name: name.children[1].children[0].value,
            email: email.children[1].children[0].value,
            website: website.children[1].children[0].value,
            logo: logo.children[1].children[0].value,
        };

        if (isEdit) {
            company._id = _id;
            dispatch(editItemData(selectedItemMenu, company));
        } else {
            dispatch(addItemData(selectedItemMenu, company));
        }
        closeModal()
    };

    const checkEdit = (value) => (isEdit ? value : '');

    const form = (
        <form className={classesList}>
            <TextField
                id='name'
                label='Name'
                defaultValue={checkEdit(name)}
                ref={(r) => {
                    name = r;
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
                id='website'
                label='Website'
                defaultValue={checkEdit(website)}
                ref={(r) => {
                    website = r;
                }}
            />
            <TextField
                id='logo'
                label='Url logo'
                defaultValue={checkEdit(logo)}
                ref={(r) => {
                    logo = r;
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
                <ListItemAvatar>
                    <Avatar>
                        <img src={logo} alt='' width='50' />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={name} />
            </ListItem>
            <ListItem>
                <ListItemText primary={website} />
            </ListItem>
            <ListItem>
                <ListItemText primary={email} />
            </ListItem>
        </List>
    );

    const renderCompany = !isEdit && name ? viewList : form;

    return renderCompany;
});

export default CompanyModal;
