import { createSlice } from '@reduxjs/toolkit'

type LikeArticlesState = {
    [id:number]:boolean
}

const initialState:LikeArticlesState = {
    1:true,
    2:true,
}

export const likeSlice = createSlice({
    name: "like",
    initialState,
    reducers:{
        addLike: (prevState, action) => ({
            ...prevState,
            [action.payload] : true
        }),

        removeLike: (prevState, action) => ({
            ...prevState,
            [action.payload] : false
        })
    }
})

export const {addLike, removeLike} = likeSlice.actions
export default likeSlice.reducer