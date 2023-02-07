import { createSlice } from '@reduxjs/toolkit'

type LikesArticlesState = {
    [id: number]: number
}

export const initialState:LikesArticlesState = {}

export const favoriteSlice = createSlice({
    name: "favoritesArticles",
    initialState,
    reducers:{
        
        addArticleToFavorites: (prevState,action) => ({
            ...prevState,
            [action.payload.id]:(prevState[action.payload.id] || 0)
        })
    }
})

export const {addArticleToFavorites} = favoriteSlice.actions

export default favoriteSlice.reducer