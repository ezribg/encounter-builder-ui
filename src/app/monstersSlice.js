import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    monsters: []
};

const monsterSlice = createSlice({
    name: "monsters",
    initialState,
    reducers:{
        setMonsters: (state, action) => {
            state.monsters = action.payload;
        },
        addMonster: (state, action) => {
            state.monsters.push(action.payload);
        }
    }
});

export const {setMonsters, addMonster} = monsterSlice.actions;
export default monsterSlice.reducer;