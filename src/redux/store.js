import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./app-reducer";
// import { persistStore } from "redux-persist";
import { middleware } from "./persist";
// import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

// const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default store;

/* Without ReduxToolkit

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools()); */
