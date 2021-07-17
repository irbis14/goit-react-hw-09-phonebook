import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./app-reducer";
import { persistStore, persistReducer } from "redux-persist";
import { appPersistConfig, middleware } from "./persist";
// import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore({
  reducer: {
    contacts: persistReducer(appPersistConfig, contactsReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };

/* Without ReduxToolkit

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools()); */
