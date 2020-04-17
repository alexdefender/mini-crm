import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import { setItemMenu } from '../store/actions';

export default function MenuItems() {
    const dispatch = useDispatch();
    const { selectedItemMenu } = useSelector((store) => store);

    const setSelectedItem = (e, item) => {
        e.stopPropagation();
        dispatch(setItemMenu(item));
    };

    return (
        <div>
            <ListItem
                button
                selected={selectedItemMenu === 'companies'}
                onClick={(e) => {
                    setSelectedItem(e, 'companies');
                }}
            >
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary='Companies' />
            </ListItem>
            <ListItem
                button
                selected={selectedItemMenu === 'employees'}
                onClick={(e) => {
                    setSelectedItem(e, 'employees');
                }}
            >
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary='Employees' />
            </ListItem>
        </div>
    );
}
