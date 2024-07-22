import {createSlice} from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        total: 0,
        id: ""
    },
    reducers: {
        createCart: (state, actions) => {
            state.products = actions.payload?.cartItemList;
            state.total = actions.payload?.total;
            state.id = actions.payload?.id;
        }
    }
});

const {reducer, actions} = cart;
export const {
    createCart
} = actions;

export default reducer;
