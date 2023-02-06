import { createSlice } from '@reduxjs/toolkit'

type LikesArticlesState = {
    [id: number]: boolean
}

export const initialState:LikesArticlesState = {
    1: true,
    3: true,
}

export const favoriteSlice = createSlice({
    name: "favoritesArticles",
    initialState,
    reducers:{
        
        addArticleToFavorites: (prevState,action) => ({
            ...prevState,
            [action.payload.id]:prevState[action.payload.id]
        })
    }
})

export const {addArticleToFavorites} = favoriteSlice.actions

export default favoriteSlice.reducer