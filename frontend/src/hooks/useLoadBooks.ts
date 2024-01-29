import { bookAction } from '@stores/bookSlice';
import { useAppDispatch } from './useAppDispatch';
import { useEffect, useState } from 'react';
import BOOK_API from '@src/apis/book-api';

const useLoadBooks = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();

    const loadBooks = async () => {
        try {
            const res = await BOOK_API.getAllBooks();
            dispatch(bookAction.setState(res.data));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadBooks();
    }, []);

    return { loading };
};

export default useLoadBooks;
