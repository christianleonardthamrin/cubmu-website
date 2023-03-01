import getBaseUrl from "@/helper/general_helper"
import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    categories: []
}

const BASE_URL = getBaseUrl()

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        getAllCategories: (state, action) => {
            state.categories = action.payload
        }
    }
})

export const fetchCategories = () => 
    async (dispatch) => {
        await axios.get(BASE_URL + 'getAllCategory')
        .then(({data}) => dispatch(getAllCategories(data.result)))
        .catch(err => console.log(err))
    }

export const {getAllCategories} = categorySlice.actions

export default categorySlice.reducer