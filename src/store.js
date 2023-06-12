import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counterReducer from './Redux/Counter/CounterSlice'
import UserAuthReducer from './Redux/UserAuthSlice/UserAuthSlice';
import RecruitAuthSlice from './Redux/RecruitAuthSlice/RecruitAuthSlice';

import { combineReducers } from "redux";


const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    counter: counterReducer,
    userAuth: UserAuthReducer,
    recruitAuth: RecruitAuthSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)



export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})


export const persistor = persistStore(store)