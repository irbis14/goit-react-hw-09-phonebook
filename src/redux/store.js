import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./app-reducer";
import { middleware } from "./persist";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export default store;
