import {createSlice} from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'cart',
    initialState: {
        products: [],
    },
    reducers: {

    }
});

const {reducer, actions} = cart;
export const {

} = actions;

export default reducer;
