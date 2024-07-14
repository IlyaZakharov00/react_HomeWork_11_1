import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterFacts from './slices/countFactSlice'

const rootReducer = combineReducers({
    counterFacts
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch