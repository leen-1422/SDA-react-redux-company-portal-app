import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CompaniesList } from "../../types/type";


type InitialState={
    companiesList: null | CompaniesList,
    loading: boolean,
    error: null | string, 
    
}
const initialState: InitialState = {
    companiesList: null ,
    loading: true,
    error: null, 
};


export const CompaniesIdSlice =createSlice({
    name:'companyId',
    initialState:initialState,
    reducers:{
        getId: (state,action:PayloadAction<CompaniesList>)=>{
            state.companiesList = action.payload; 
            state.loading= false;
        },
        getError:(state,action:PayloadAction<string>)=>{
            state.error = action.payload; 

        }


    }
})
const CompaniesIdReducer = CompaniesIdSlice.reducer;
export default CompaniesIdReducer
export const CompaniesIdActions = CompaniesIdSlice.actions;
