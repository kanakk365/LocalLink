import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  isDeliveryMode: boolean;
}

const initialState: UIState = {
  isDeliveryMode: true, // Default to delivery mode
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.isDeliveryMode = !state.isDeliveryMode;
    },
    setDeliveryMode: (state, action: PayloadAction<boolean>) => {
      state.isDeliveryMode = action.payload;
    },
  },
});

export const { toggleMode, setDeliveryMode } = uiSlice.actions;

export default uiSlice.reducer;
