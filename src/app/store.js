import { configureStore } from "@reduxjs/toolkit";
import dropdownReducer from "./dropdownSlice";
import monsterSlice from "./monstersSlice";

export default configureStore({
    reducer: {
        dropdowns: dropdownReducer,
        monsters: monsterSlice
    }
});