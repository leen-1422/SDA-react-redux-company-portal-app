import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../redux/store';
import { allCompaniesActions } from '../redux/slice/allCompanies';
import { Link } from 'react-router-dom';
import { getSearch } from '../redux/slice/searchSlice';

export default function AllCompanies() {
  const dispatch = useDispatch();
  const companies = useSelector((state: AppState) => state.allCopaniesR.companiesList);
  const companyLoading = useSelector((state: AppState) => state.allCopaniesR.loading);
  const error = useSelector((state: AppState) => state.allCopaniesR.error);
  const search = useSelector((state: AppState) => state.SearchR.search);

  useEffect(() => {
    const url = 'https://api.github.com/organizations';

    axios
      .get(url)
      .then((response) => dispatch(allCompaniesActions.getDateSuces(response.data)))
      .catch((error) => dispatch(allCompaniesActions.getError(error.message)));
  }, [dispatch]);

  if (error) {
    return <div>{error}</div>;
  }

  if (companyLoading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  const filteredCompanies = companies.filter((company) => {
    return search === '' ? company : company.login.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <section>
        <input type="text" placeholder="Search content" onChange={(e) => dispatch(getSearch(e.target.value))} />
      </section>
      {filteredCompanies.map((company) => (
        <div key={company.id}>
          <h3>
            {company.description} {company.login}
          </h3>
          <img src={company.avatar_url} height="150px" width="100px" alt="Company Avatar" />
          <Link to={`companies/${company.id}`}>
            <button>Click</button>
          </Link>
        </div>
      ))}
    </div>
  );
}