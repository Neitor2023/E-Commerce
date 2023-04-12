import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig'

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

    axios.get("https://e-commerce-api-v2.academlo.tech/api/v1/cart", getConfig())
    .then(resp => dispatch(setProductsCard(resp.data)))
    .catch(error => console.error(error))

}


export const createProductsCardThunk = data => dispatch =>{
    
    axios
    .post("https://e-commerce-api-v2.academlo.tech/api/v1/cart", data, getConfig())
    .then(() => dispatch(getProductsCardThunk()))
    .catch(error => console.error(error))
    
}

export const checkoutProductsCardThunk = () => dispatch =>{
    
    axios 
    .post("https://e-commerce-api-v2.academlo.tech/api/v1/purchases", {}, getConfig())
    .then(() => dispatch(getProductsCardThunk()))
    .catch(error => console.error(error))
    
}

export const getPurchaseCardThunk = () => dispatch =>{

    axios
    .get("https://e-commerce-api-v2.academlo.tech/api/v1/purchases", getConfig())
    .then(resp => dispatch(setProductsCard(resp.data)))
    .catch(error => console.error(error))

}

export const { setProductsCard } = productsCardSlice.actions;

export default productsCardSlice.reducer;