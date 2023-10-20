import { configureStore } from "@reduxjs/toolkit";
import allCompaniesReducer from "./slice/allCompanies";
import CompaniesIdReducer from "./slice/companyId";
import SearchReducer from "./slice/searchSlice";



export const store = configureStore({
    reducer:{
        allCopaniesR:allCompaniesReducer,
        CompaniesIdR:CompaniesIdReducer,
        SearchR: SearchReducer
    },
})

export type AppState = ReturnType<typeof store.getState>;
export default store;