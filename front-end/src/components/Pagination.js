import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import PaginationMaterial from '@material-ui/lab/Pagination';
import { setPage } from '../store/actions';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Pagination() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { listData, page } = useSelector((store) => store);

    const setPagePagination = (e, page) => {
        e.stopPropagation();
        dispatch(setPage(page));
    };

    const listLength = listData.length;
    const countPages = Math.ceil(listLength / 10);

    return (
        <div className={classes.root}>
            <PaginationMaterial count={countPages} page={page} onChange={setPagePagination} />
        </div>
    );
}
