import { configureStore } from '@reduxjs/toolkit'
import favoriteArticleReducer from './favoriteArticleReducer'
import likeReducer from './likeReducer'

export const store = configureStore({
    reducer: {
        likeArticles: likeReducer,
        favoritesArticles: favoriteArticleReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch