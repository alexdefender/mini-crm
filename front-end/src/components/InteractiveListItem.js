import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default function InteractiveListItem(props) {
    const { item, openItem, editItem, deleteItem } = props;
    const { _id, name, logo, firstName, lastName } = item;

    const renderName = name || `${firstName} ${lastName}`;
    const renderLogo = logo ? (
        <ListItemAvatar>
            <Avatar>
                <img src={logo} alt='' width='50' />
            </Avatar>
        </ListItemAvatar>
    ) : (
        ''
    );

    return (
        <ListItem
            button
            onClick={(e) => {
                openItem(e, item);
            }}
        >
            {renderLogo}
            <ListItemText primary={renderName} />
            <ListItemSecondaryAction>
                <IconButton
                    edge='end'
                    aria-label='edit'
                    onClick={(e) => {
                        editItem(e, item);
                    }}
                >
                    <EditIcon />
                </IconButton>
                <IconButton
                    edge='end'
                    aria-label='delete'
                    onClick={(e) => {
                        deleteItem(e, _id);
                    }}
                >
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}
