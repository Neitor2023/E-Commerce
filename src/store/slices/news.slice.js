import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const newsSlice = createSlice({
    name: 'news',
    initialState: [],
    reducers: {
        setNews : (state, action) => {
            return action.payload
        }
    }
})

export const getNewsThunk = () => dispatch =>{

    axios
        .get( "https://news-app-api.academlo.tech/news/" )
        .then( resp => dispatch( setNews(resp.data) ) )
        .catch( error => console.error(error) )

}

export const { setNews } = newsSlice.actions;

export default newsSlice.reducer;
