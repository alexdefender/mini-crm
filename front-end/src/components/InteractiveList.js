import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from './Pagination';
import InteractiveListItem from './InteractiveListItem';
import ModalForData from './ModalForData';
import { getDataList, deleteItemData } from '../store/thunk/listData';
import { setPage } from '../store/actions';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '50vw',
        marginTop: '9vh',
        marginLeft: '2vw',
    },
    progress: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    titleWrap: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}));

function getChank(arr, page) {
    const lastElement = `${page}0`;
    const firstElement = lastElement - 10;

    return arr.slice(firstElement, lastElement);
}

function generate(arr, element) {
    return arr.map((value, key) =>
        React.cloneElement(element, {
            key: key,
            item: value,
        })
    );
}

export default function InteractiveList() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [selectedItem, setSelectedItem] = useState(null);
    const { listData, selectedItemMenu, page } = useSelector((store) => store);

    useEffect(() => {
        dispatch(getDataList(selectedItemMenu));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        dispatch(getDataList(selectedItemMenu));
        dispatch(setPage(1));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedItemMenu]);

    if (listData.length === 0) {
        return (
            <div className={classes.progress}>
                <CircularProgress />
            </div>
        );
    }

    const openItem = (e, item = {}) => {
        e.stopPropagation();
        setSelectedItem(item);
    };

    const closeItem = () => {
        setSelectedItem(null);
    };

    const editItem = (e, item) => {
        e.stopPropagation();
        const newItem = { ...item, isEdit: true };
        setSelectedItem(newItem);
    };

    const deleteItem = (e, id) => {
        e.stopPropagation();
        dispatch(deleteItemData(selectedItemMenu, id));
    };

    const renderList = getChank(listData, page);

    return (
        <div className={classes.root}>
            <div className={classes.titleWrap}>
                <Typography variant='h6'>List of Companies</Typography>
                <ModalForData {...{ selectedItem, closeItem, selectedItemMenu }} />
                <Button variant='contained' onClick={openItem} className={classes.buttonAdd}>
                    Add
                </Button>
            </div>
            <List>
                {generate(
                    renderList,
                    <InteractiveListItem {...{ editItem, deleteItem, openItem }} />
                )}
            </List>
            <Pagination />
        </div>
    );
}
