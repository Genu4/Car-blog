import { createSlice } from '@reduxjs/toolkit'

type LikeArticlesState = {
    [id:number]:boolean
}

const initialState:LikeArticlesState = {
    1: true,
    3: true
}

export const likeSlice = createSlice({
    name: "like",
    initialState,
    reducers:{

    }
})


export default likeSlice.reducer