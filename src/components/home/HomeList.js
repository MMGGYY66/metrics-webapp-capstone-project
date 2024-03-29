import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCompanies } from '../../redux/companiesListSlice';
import './HomeList.scss';
import HomeItem from './HomeItem';

const HomeList = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const { companyList } = useSelector((state) => state.companies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);
  return (
    <div className="context">
      <div className="search">
        <input
          className="input"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Company"
          value={search}
        />
      </div>

      <div className="card">
        {companyList
          .filter((company) => {
            if (search === '') {
              return company;
            } if (
              company.symbol.toLowerCase().includes(search.toLowerCase())
            ) {
              return company;
            }
            return null;
          })
          .map((company) => (
            <div
              className="repeated-card"
              key={uuidv4()}
              onClick={() => navigate(`/details/${company.symbol}`)}
              aria-hidden="true"
            >
              <HomeItem title={company.symbol} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeList;
