import { getBaseUrl } from "helper/general_helper"
import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    values: []
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        getAllCategories: (state, action) => {
            state.values = action.payload
        }
    }
})

export const fetchCategories = () => 
    async (dispatch) => {
        await axios.get(getBaseUrl() + 'getAllCategory')
        .then(({data}) => dispatch(getAllCategories(data.result)))
        .catch(err => console.log(err))
    }

export const {getAllCategories} = categorySlice.actions

export default categorySlice.reducer