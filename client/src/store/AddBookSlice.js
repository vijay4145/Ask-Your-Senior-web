import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    BOOK_NAME : null,
    PUBLICATION : null, 
    PRICE : null,
    DESCRIPTION : null,
    COLLEGE : null,
    BRANCH : null,
    SEMESTER : null,
    BOOK_IMAGE_URL : null,
    EDITION: null
}


export const addBookSlice = createSlice({
    name: "addBookSlice",
    initialState,
    reducers: {
      setAddBookSlice: (state, action) => {
        if(action.payload.BOOK_NAME && action.payload.BOOK_NAME !== null)
          state.BOOK_NAME = action.payload.BOOK_NAME;

        if(action.payload.PUBLICATION && action.payload.PUBLICATION !== null)
          state.PUBLICATION = action.payload.PUBLICATION;

        if(action.payload.PRICE && action.payload.PRICE !== null)
          state.PRICE = action.payload.PRICE;

        if(action.payload.DESCRIPTION && action.payload.DESCRIPTION !== null)
          state.DESCRIPTION = action.payload.DESCRIPTION;

        if(action.payload.COLLEGE && action.payload.COLLEGE !== null)
          state.COLLEGE = action.payload.COLLEGE;

        if(action.payload.BRANCH && action.payload.BRANCH !== null)
          state.BRANCH = action.payload.BRANCH;
        
        if(action.payload.SEMESTER && action.payload.SEMESTER !== null)
        state.SEMESTER = action.payload.SEMESTER;

        if(action.payload.BOOK_IMAGE_URL && action.payload.BOOK_IMAGE_URL !== null)
          state.BOOK_IMAGE_URL = action.payload.BOOK_IMAGE_URL;
        
          if(action.payload.EDITION && action.payload.EDITION !== null)
          state.EDITION = action.payload.EDITION;
      }
    },
  });
  
  // Action creators are generated for each case reducer function
  export const { setAddBookSlice } = addBookSlice.actions;
  
  export default addBookSlice.reducer;