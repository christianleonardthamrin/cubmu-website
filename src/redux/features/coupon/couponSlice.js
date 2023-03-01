import getBaseUrl from "@/helper/general_helper"
import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    values: []
}

export const couponSlice = createSlice({
    name: 'coupon',
    initialState,
    reducers: {
        getAllCoupons: (state, action) => {
            state.values = action.payload
        }
    }
})

export const fetchCoupons = () => 
    async (dispatch) => {
        await axios.get(getBaseUrl() + 'getCoupon')
        .then(({data}) => dispatch(getAllCoupons(data.result)))
        .catch(err => console.log(err))
    }

export const {getAllCoupons} = couponSlice.actions

export default couponSlice.reducer