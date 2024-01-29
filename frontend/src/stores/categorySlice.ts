import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CATEGORY_KEY } from './keys';
import CategoryModel from '@core/models/category.model';

const initialState: CategoryModel[] = [];

export const categorySlice = createSlice({
    name: CATEGORY_KEY,
    initialState,
    reducers: {
        setState: (state, action: PayloadAction<CategoryModel[]>) => {
            state = action.payload;

            return state;
        },
    },
});

export const categoryAction = categorySlice.actions;

const categoryReducer = categorySlice.reducer;
export default categoryReducer;
