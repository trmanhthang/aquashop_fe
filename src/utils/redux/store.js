import {combineReducers, configureStore} from "@reduxjs/toolkit";
import productReducer from "~/slices/productSlice";
import cartReducer from "~/slices/cartSlice";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
    }),
});

const persistor = persistStore(store);

export { store, persistor };