import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "../features/customerSlice";
import reservationReducer from "../features/reservationSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationReducer,
    customers: customerReducer,
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Appdispatch = typeof store.dispatch;
