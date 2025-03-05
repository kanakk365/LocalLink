import {combineReducers, configureStore} from "@reduxjs/toolkit"
import authReducer from "./slice/authSlice"
import routeReducer from "./slice/routeSlice"
import uiReducer from "./slice/uiSlice"
import storage from "redux-persist/lib/storage"
import persistReducer from "redux-persist/es/persistReducer";
import { persistStore } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
  };

const rootReducer = combineReducers({
    auth: authReducer,
    route: routeReducer,
    ui: uiReducer,
})

const persistedReducer = persistReducer(persistConfig , rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor= persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;