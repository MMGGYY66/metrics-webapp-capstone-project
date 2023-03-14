import React from 'react';
import PropTypes from 'prop-types';
import './HomeItem.scss';
import company from '../../images/company.png';

const HomeItem = (props) => {
  const { title } = props;
  HomeItem.propTypes = {
    title: PropTypes.string.isRequired,
  };

  return (
    <div className="container" data-testid="homeitem">
      <div className="item">
        <img className="icon" src={company} alt="company" />
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
};

export default HomeItem;
