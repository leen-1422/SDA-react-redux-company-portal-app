import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { CompaniesIdActions } from '../redux/slice/companyId';
import { AppState } from '../redux/store';

export default function Companies() {
    const {id}= useParams()
    console.log(id)
    const companies = useSelector((state: AppState) => state.CompaniesIdR.companiesList)
    const companyLoading = useSelector((state: AppState) => state.CompaniesIdR.loading)
    const error = useSelector((state: AppState) => state.CompaniesIdR.error)

    const url = `https://api.github.com/organizations/${id}`;
    const dispatch = useDispatch()
    useEffect(()=>{
    function fetchDate(){
      axios
      .get(url)
      .then((response)=> dispatch(CompaniesIdActions.getId(response.data)))
      .catch((error)=> dispatch(CompaniesIdActions.getError(error.message)))}
    
    fetchDate();

    },[dispatch,id])
    console.log(companies)
    if (error) {
        return <div> {error}</div>
      }
    if (companyLoading === true) {
                return (
                  <div>
                    <h1>loading</h1>
                  </div>
                )
              }
  return (
    <div>
        
        
        <div> 
          <h3 key={companies?.id}>{companies?.events_url}</h3>
          <img src={companies?.avatar_url} height="150px" width="100px"/>

          
        
        </div>
        
        







    </div>
  )
}
