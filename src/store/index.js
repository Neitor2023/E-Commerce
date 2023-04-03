import { configureStore } from '@reduxjs/toolkit'
import news from './slices/news.slice'

export default configureStore({
    reducer: {
        news
    }
})
