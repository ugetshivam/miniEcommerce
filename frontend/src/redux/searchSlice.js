import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchField: ""
    },
    reducers: {
        changeField: (state, action) => {
            state.searchField = action.payload;
        }
    }
});

export const { changeField } = searchSlice.actions;
export default searchSlice.reducer;