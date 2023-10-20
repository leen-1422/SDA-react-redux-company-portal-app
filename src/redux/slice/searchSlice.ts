import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState={
    search:''
}

export const CompaniesSearch =createSlice({
    name:'search',
    initialState:initialState,
    reducers:{
        getSearch: (state,action:PayloadAction<string>)=>{
            state.search= action.payload
        },




    }
})

// const SearchReducer = CompaniesSearch.reducer;
// export default SearchReducer
// export const SearchActions = CompaniesSearch.actions;

export const {getSearch} = CompaniesSearch.actions;
export default CompaniesSearch.reducer;
