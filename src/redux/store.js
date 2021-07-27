import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./app-reducer";
import { authReducer } from "./auth";
import { middleware } from "./persist";

const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export default store;
