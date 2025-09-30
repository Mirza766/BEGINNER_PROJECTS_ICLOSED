import { configureStore } from "@reduxjs/toolkit"
import experienceReducer from '../features/experience/experienceSlice'



export const store=configureStore({
    reducer:experienceReducer
});