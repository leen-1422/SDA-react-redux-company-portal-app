import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CompaniesList } from "../../types/type";

type InitialState={
    companiesList: CompaniesList [],
    loading: boolean,
    error: null | string, 
}
const initialState: InitialState = {
    companiesList:  [],
    loading: true,
    error: null, 
};
export const allCompaniesSlice = createSlice({
    name: 'companies',
    initialState: initialState,
    reducers: {
        getDateSuces: (state,action:PayloadAction<CompaniesList[]>)=>{
            state.companiesList = action.payload; 
            state.loading= false;
        },
        // getLoading: (state,action) =>{
        //     state.loading = action.payload; 
        //     state.loading= false;
        // }, 

        getError: (state,action) =>{
            state.error = action.payload; 
        }
    },
});

const allCompaniesReducer = allCompaniesSlice.reducer;
export default allCompaniesReducer
export const allCompaniesActions = allCompaniesSlice.actions;


