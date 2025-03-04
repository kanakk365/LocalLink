import {combineReducers, configureStore} from "@reduxjs/toolkit"
import authReducer from "./slice/authSlice"
import storage from "redux-persist/lib/storage"
import persistReducer from "redux-persist/es/persistReducer";
import { persistStore } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
  };

const rootReducer = combineReducers({
    auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig , rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor= persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;