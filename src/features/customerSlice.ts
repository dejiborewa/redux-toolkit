import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Customer {
  id: string;
  name: string;
  menu: string[];
}

interface AddToMenu {
  menu: string;
  id: string;
}

interface RemoveFromMenu {
  index: number;
  id: string;
}

interface initialStateType {
  value: Customer[];
}

const initialState: initialStateType = {
  value: [],
};

const customerSlice = createSlice({
  name: "customerSlice",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },

    addMenu: (state, action: PayloadAction<AddToMenu>) => {
      state.value.forEach((item) => {
        if (item.id === action.payload.id) {
          item.menu.push(action.payload.menu);
        }
      });
    },

    removeMenu: (state, action: PayloadAction<RemoveFromMenu>) => {
      state.value.forEach((item) => {
        if (item.id === action.payload.id) {
          item.menu.splice(action.payload.index, 1);
        }
      });
    },
  },
});

export const { addCustomer, addMenu, removeMenu } = customerSlice.actions;

export default customerSlice.reducer;
