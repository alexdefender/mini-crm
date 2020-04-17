import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import CompanyModal from './CompanyModal';
import EmployeeModal from './EmployeeModal';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 360,
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
        '& > *': {
            marginBottom: theme.spacing(2),
        },
    },
}));

export default function ModalForData(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { selectedItemMenu, selectedItem, closeItem } = props;

    useEffect(() => {
        if (selectedItem !== null) {
            setOpen(true);
        }
    }, [selectedItem]);

    if (selectedItem === null) {
        return '';
    }

    const handleClose = () => {
        setOpen(false);
        closeItem();
    };

    let renderData;

    if (selectedItemMenu === 'companies') {
        renderData = (
            <CompanyModal
                selectedCompany={selectedItem}
                classesList={classes.list}
                closeModal={handleClose}
                {...{ selectedItemMenu }}
            />
        );
    } else if (selectedItemMenu === 'employees') {
        renderData = (
            <EmployeeModal
                selectedEmployee={selectedItem}
                classesList={classes.list}
                closeModal={handleClose}
                {...{ selectedItemMenu }}
            />
        );
    }

    return (
        <div>
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                {renderData}
            </Modal>
        </div>
    );
}
