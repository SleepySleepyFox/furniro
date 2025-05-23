import { FiltersState } from "@/lib/types/FilterTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: FiltersState = {
    itemsPerPage: 10,
    sortBy: "Option 1"
  };

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
            ItemsPerPage: (state, action: PayloadAction<number>) => {
                state.itemsPerPage = action.payload
            },
            SortBy: (state, action: PayloadAction<string>) => {
                state.sortBy = action.payload
            }
    }
})

export const {ItemsPerPage, SortBy} = filterSlice.actions
export default filterSlice.reducer