import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    creatureSizes: [],
    creatureTypes: [],
    alignments: []
};

const dropdownSlice = createSlice({
    name: "dropdowns",
    initialState,
    reducers:{
        setCreatureSizes: (state, action) => {
            state.creatureSizes = action.payload;
        },
        setCreatureTypes: (state, action) => {
            state.creatureTypes = action.payload;
        },
        setAlignments: (state, action) => {
            state.alignments = action.payload;
        }
    }
});

export const {setCreatureSizes, setCreatureTypes, setAlignments} = dropdownSlice.actions;
export default dropdownSlice.reducer;