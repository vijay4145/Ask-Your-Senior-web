import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    COLLEGE_NAME : localStorage.getItem('COLLEGE_NAME'),
    BRANCH : localStorage.getItem('BRANCH'), 
    SEMESTER : localStorage.getItem('SEMESTER')
}


export const bookSearchSlice = createSlice({
    name: "BookSearchSlice",
    initialState,
    reducers: {
      setBookSearchSlice: (state, action) => {
        if(action.payload.COLLEGE_NAME && action.payload.COLLEGE_NAME !== null){
          state.COLLEGE_NAME = action.payload.COLLEGE_NAME;
          localStorage.setItem('COLLEGE_NAME', action.payload.COLLEGE_NAME);
        }
        if(action.payload.BRANCH && action.payload.BRANCH !== null){
          state.BRANCH = action.payload.BRANCH;
          localStorage.setItem('BRANCH', action.payload.BRANCH);
        }
        if(action.payload.SEMESTER && action.payload.SEMESTER !== null){
          state.SEMESTER = action.payload.SEMESTER;
          localStorage.setItem('SEMESTER', action.payload.SEMESTER);
        }
      }
    },
  });
  
  // Action creators are generated for each case reducer function
  export const { setBookSearchSlice } = bookSearchSlice.actions;
  
  export default bookSearchSlice.reducer;