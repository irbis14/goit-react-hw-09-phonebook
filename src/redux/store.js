import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import contactsReducer from "./app-reducer";
import { authReducer } from "./auth";
import { appPersistConfig, middleware } from "./persist";

const store = configureStore({
  reducer: {
    auth: persistReducer(appPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
