import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface dropdownState {
  isshown: boolean;
}

const initialState: dropdownState = {
  isshown: false,
};

export const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    showlist: (state) => {
      state.isshown = !state.isshown;
    },
  },
});

export const { showlist } = dropdownSlice.actions;

export const selectDropDownShown = (state: RootState) => state.dropdown.isshown;

export default dropdownSlice.reducer;
