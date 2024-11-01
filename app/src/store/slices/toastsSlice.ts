import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Toast {
  id?: string;
  message: string;
  type: "success" | "error" | "warning" | "info";
}

export interface ToastsState {
  toasts: Array<Toast>;
}

const initialState: ToastsState = {
  toasts: [],
};

const toastsSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {
    addToast(state, action: PayloadAction<Toast>) {
      state.toasts.push(action.payload);
    },
    deleteToast(state, action: PayloadAction<Toast>) {
      const { id } = action.payload;
      const toastIndex = state.toasts.findIndex((toast) => toast.id === id);
      if (toastIndex !== -1) {
        state.toasts.splice(toastIndex, 1);
      }
    },
  },
});

export const { addToast, deleteToast } = toastsSlice.actions;
export const toastsReducer = toastsSlice.reducer;
