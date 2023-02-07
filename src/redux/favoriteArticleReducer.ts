import { createSlice } from '@reduxjs/toolkit'
import { omit } from 'lodash'

type LikesArticlesState = {
    [id: number]: boolean
}

export const initialState:LikesArticlesState = {}

export const favoriteSlice = createSlice({
    name: "favoritesArticles",
    initialState,
    reducers:{
        
        addArticleToFavorites: (prevState,action) => ({
            ...prevState,
            [action.payload.id]:prevState[action.payload.id]
        }),

        removeArticleFromFavorites: (prevState, action) => omit(prevState, action.payload)
    }
})

export const {addArticleToFavorites, removeArticleFromFavorites} = favoriteSlice.actions

export default favoriteSlice.reducer