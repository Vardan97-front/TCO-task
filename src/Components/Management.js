import React from 'react';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { getTab } from '../store/action/resource';

const Management = () => {
  const { resource: { tabs } } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="container-fluid management">
      <div className="row col justify-content-center">
        <nav className="col-12">
          <ul className="col-4 managementUl">
            {_.map(tabs, (t, index) => (
              <NavLink to={`/${t.title}`} key={index} onClick={() => dispatch(getTab(t.title))}>
                <li>
                  {t.title}
                </li>
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default withRouter(Management);
