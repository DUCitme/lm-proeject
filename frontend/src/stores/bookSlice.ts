import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BOOK_KEY } from './keys';
import BookModel from '@core/models/book.model';

const initialState: BookModel[] = [];

export const bookSlice = createSlice({
    name: BOOK_KEY,
    initialState,
    reducers: {
        setState: (state, action: PayloadAction<BookModel[]>) => {
            state = action.payload;
            return state;
        },
    },
});

export const bookAction = bookSlice.actions;

const bookReducer = bookSlice.reducer;
export default bookReducer;
