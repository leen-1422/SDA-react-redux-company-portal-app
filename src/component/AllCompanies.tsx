import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';



import { AppState } from '../redux/store';
import { allCompaniesActions } from '../redux/slice/allCompanies';
import { Login } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { useParams } from 'react-router';

export default function AllCopanies() {

  const companies = useSelector((state: AppState) => state.allCopaniesR.companiesList)
  const companyLoading = useSelector((state: AppState) => state.allCopaniesR.loading)
  const error = useSelector((state: AppState) => state.allCopaniesR.error)
    const url = "https://api.github.com/organizations";
    const dispatch = useDispatch()
    useEffect(()=>{
    function fetchDate(){
      axios
      .get(url)
      .then((response)=> dispatch(allCompaniesActions.getDateSuces(response.data)))
      .catch((error)=> dispatch(allCompaniesActions.getError(error.message)))}
    
    fetchDate();

    },[dispatch])

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
              {companies.map((company) =>
        
              <div> 
                <h3 key={company.id}>{company.description}</h3>
                <img src={company.avatar_url} height="150px" width="100px"/>
                <Link to={`companies/${company.id}`}>
                  <button>click</button>
                </Link>
                
              
              </div>
              
              )}
            </div>
)
}