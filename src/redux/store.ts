import { configureStore } from "@reduxjs/toolkit";
import allCompaniesReducer from "./slice/allCompanies";
import CompaniesIdReducer from "./slice/companyId";



export const store = configureStore({
    reducer:{
        allCopaniesR:allCompaniesReducer,
        CompaniesIdR:CompaniesIdReducer
    },
})

export type AppState = ReturnType<typeof store.getState>;
export default store;