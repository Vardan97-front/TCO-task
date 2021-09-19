import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import data from '../resource/tast_data, react.json';
import { getTab, setResource } from '../store/action/resource';
import Management from './Management';

const Wrapper = ({ children, history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let title = history.location.pathname;
    title = title.slice(title.indexOf('/') + 1);

    dispatch(setResource(data));
    dispatch(getTab(title));
  }, [data]);

  return (
    <div className="wrapper">
      <Header />
      <Management />
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.any.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(Wrapper);
