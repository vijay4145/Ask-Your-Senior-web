import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    PROJECT_NAME : null,
    DESCRIPTION : null, 
    PROJECT_IMAGE_URL : null,
    GITHUB_LINK : null,
    LINKEDIN_LINK : null,
    TAGS : null,
}


export const addProjectSlice = createSlice({
    name: "addProjectSlice",
    initialState,
    reducers: {
      setAddProjectSlice: (state, action) => {
        if(action.payload.PROJECT_NAME && action.payload.PROJECT_NAME !== null)
          state.PROJECT_NAME = action.payload.PROJECT_NAME;

        if(action.payload.DESCRIPTION && action.payload.DESCRIPTION !== null)
          state.DESCRIPTION = action.payload.DESCRIPTION;

        if(action.payload.PROJECT_IMAGE_URL && action.payload.PROJECT_IMAGE_URL !== null)
          state.PROJECT_IMAGE_URL = action.payload.PROJECT_IMAGE_URL;

        if(action.payload.DESCRIPTION && action.payload.DESCRIPTION !== null)
          state.DESCRIPTION = action.payload.DESCRIPTION;

        if(action.payload.GITHUB_LINK && action.payload.GITHUB_LINK !== null)
          state.GITHUB_LINK = action.payload.GITHUB_LINK;

        if(action.payload.LINKEDIN_LINK && action.payload.LINKEDIN_LINK !== null)
          state.LINKEDIN_LINK = action.payload.LINKEDIN_LINK;
        
        if(action.payload.TAGS && action.payload.TAGS.length > 0 && action.payload.TAGS !== null)
        state.TAGS = action.payload.TAGS;

        if(action.payload.FILE && action.payload.FILE !== null)
          state.FILE = action.payload.FILE;
        
      }
    },
  });
  
  // Action creators are generated for each case reducer function
  export const { setAddProjectSlice } = addProjectSlice.actions;
  
  export default addProjectSlice.reducer;