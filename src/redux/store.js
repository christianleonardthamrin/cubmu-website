import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './features/category/categorySlice'
import couponReducer from './features/coupon/couponSlice'

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        coupon: couponReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})