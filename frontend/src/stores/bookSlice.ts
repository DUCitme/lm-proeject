import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BOOK_KEY } from './keys';

export type IBook = {
    bookid: number;
    title: string;
    author: string;
    price: number;
    description: string;
    stockquantity: number;
    isbn: string;
    publishedDate: any;
    image: string;
    languageID: number;
    publisherID: number;
    weight: number;
    page: number;
    dimensions: string;
    featured: boolean;
    bestseller: boolean;
};

const initialState: IBook[] = [];

export const bookSlice = createSlice({
    name: BOOK_KEY,
    initialState,
    reducers: {
        setState: (state, action: PayloadAction<IBook[]>) => {
            state = action.payload;
            return state;
        },
    },
});

export const bookAction = bookSlice.actions;

const bookReducer = bookSlice.reducer;
export default bookReducer;
