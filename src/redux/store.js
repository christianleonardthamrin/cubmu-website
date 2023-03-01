import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import categoryReducer from './features/category/categorySlice'

export const store = configureStore({
    reducer: {
        category: categoryReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})