import {createSlice} from "@reduxjs/toolkit";

const product = createSlice({
    name: 'products',
    initialState: {
        products: [],
        totalItem: 0,
        currentPage: 0,
        itemPerPage: 0,
        totalPages: 0,
    },
    reducers: {
        switchProducts: (state, actions) => {
            state.products = actions.payload.products;
            state.totalItem = actions.payload.totalItem;
            state.currentPage = actions.payload.currentPage;
            state.itemPerPage = actions.payload.itemPerPage;
            state.totalPages = actions.payload.totalPages;
        }
    }
});

const { reducer, actions } = product;
export const {
    switchProducts
} = actions;
export default reducer;