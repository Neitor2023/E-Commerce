import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productsCardSlice = createSlice({
	name: 'productsCard',
    initialState: [],
    reducers: {
        setProductsCard : (state, action ) => {
            return action.payload
        }
    }
})

export const getProductsCardThunk = () => dispatch =>{

    axios.get("https://e-commerce-api-v2.academlo.tech/api/v1/cart")
    .then(resp => dispatch(setProducts(resp.data)))
    .catch(error => console.error(error))

}
export const { setProductsCard } = productsCardSlice.actions;

export default productsCardSlice.reducer;