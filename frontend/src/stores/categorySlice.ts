import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CATEGORY_KEY } from './keys';

export type ICategory = {
    id: string;
    name: string;
};

const initialState: ICategory[] = [
    {
        id: '1',
        name: 'Sách Ngoại Ngữ',
    },
    {
        id: '2',
        name: 'Sách Kĩ Năng Sống',
    },
    {
        id: '3',
        name: 'Tiểu Thuyết',
    },
    {
        id: '4',
        name: 'Sách Thiếu Nhi',
    },
    {
        id: '5',
        name: 'Sách Cho Teen',
    },
];

export const categorySlice = createSlice({
    name: CATEGORY_KEY,
    initialState,
    reducers: {
        setState: (state, action: PayloadAction<ICategory[]>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const categoryAction = categorySlice.actions;

const categoryReducer = categorySlice.reducer;
export default categoryReducer;
