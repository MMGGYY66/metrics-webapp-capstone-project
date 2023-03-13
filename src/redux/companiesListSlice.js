import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_COMPANIES = 'GET_COMPANIES';
const GET_COMPANIEY_DETAILS = 'GET_COMPANIEY_DETAILS';

const url = 'https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=6457eff62276368e994cff34f8e55672';

const initialState = { companyList: [], companyDetails: {} };

const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANIES:
      return {
        ...state,
        companyList: action.companies,
      };
    case GET_COMPANIEY_DETAILS:
      return {
        ...state,
        companyDetails: action.companies,
      };
    default:
      return state;
  }
};

export const getCompanies = createAsyncThunk(
  GET_COMPANIES,
  async (args, { dispatch }) => {
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: GET_COMPANIES, companies: data });
  },
);

export const getCompanyDetails = createAsyncThunk(
  GET_COMPANIEY_DETAILS,
  async (args, { dispatch }) => {
    const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${args}?apikey=6457eff62276368e994cff34f8e55672`);
    const data = await response.json();

    dispatch({ type: GET_COMPANIEY_DETAILS, companies: data[0] });
  },
);

export default companiesReducer;
