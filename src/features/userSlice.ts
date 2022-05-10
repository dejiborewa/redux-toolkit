import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UsersData } from "../data/fakeData";

interface Users {
  id: number;
  name: string;
  username: string;
}

interface deleteUserPayload {
  id: number;
}

interface updateUsernamePayload {
  id: number;
  updatedUsername: string;
}

interface UsersDataType {
  value: Users[];
}

const initialState: UsersDataType = {
  value: UsersData,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<Users>) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action: PayloadAction<deleteUserPayload>) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },
    updateUsername: (state, action: PayloadAction<updateUsernamePayload>) => {
      state.value.forEach((item) => {
        if (item.id === action.payload.id) {
          item.username = action.payload.updatedUsername;
        }
      });
    },
  },
});

export const { addUser, deleteUser, updateUsername } = usersSlice.actions;

export default usersSlice.reducer;
