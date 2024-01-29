import { useAppDispatch } from './useAppDispatch';
import { useEffect, useState } from 'react';
import CATEGORY_API from '@src/apis/category-api';
import { categoryAction } from '@stores/categorySlice';

const useLoadCategory = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useAppDispatch();

    const loadCategories = async () => {
        try {
            const res = await CATEGORY_API.getAllCategories();
            dispatch(categoryAction.setState(res.data));
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadCategories();
    }, []);

    return { loading, loadCategories };
};

export default useLoadCategory;
