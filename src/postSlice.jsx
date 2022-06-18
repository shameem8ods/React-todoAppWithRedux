import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    text: [
        
    ]
}
  
  export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
      addPost: (state,action) => {
        state.text.push(action.payload) 
      },
      newPost: (state,action) => {
        state.text.find((item)=>item.id == action.payload.id?item.title=action.payload.title:"")
      },
      deletePost: (state,action) => {
          state.text = state.text.filter((item)=>item.id !== action.payload)
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addPost,newPost,deletePost} = postSlice.actions
  
  export default postSlice.reducer