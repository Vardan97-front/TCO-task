import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import SimpleButton from './Buttons/SimpleButton';
import { setSubsystem } from '../store/action/resource';
import SubSystem from './SubSystem';

const System = ({ data }) => {
  const [number] = useState(_.uniqueId());

  const { resource: { openId } } = useSelector((state) => state);
  const { resource: { subSystem } } = useSelector((state) => state);

  const dispatch = useDispatch();

  const openTab = () => {
    dispatch(setSubsystem(data.id));
  };

  return (
    <div className="card">
      <div className="card-header" id={`heading${number}`}>
        <h5 className="mb-0 systemLines row">
          <div
            className="col-4 name"
            data-toggle="collapse"
            data-target={`#collapse${number}`}
            aria-expanded={openId === data.id}
            aria-controls={`collapse${number}`}
          >
            {openId === data.id
              ? <FontAwesomeIcon icon={faCaretDown} onClick={openTab} />
              : <FontAwesomeIcon icon={faCaretRight} onClick={openTab} />}
            <p>{data.system_name}</p>
          </div>
          <div className="col-2">
            <p>{data.id}</p>
          </div>
          <div className="col-2">
            <p>{data.created_date}</p>
          </div>
          <div className="col-2">
            <p>{data.active_licenses}</p>
          </div>
          <div className="col-2 buttons">
            <SimpleButton classType="success" text="Add License" />
            <SimpleButton classType="danger" text="Remove" />
          </div>
        </h5>
      </div>
      <div
        id={`collapse${number}`}
        className={`collapse ${openId === data.id ? 'show' : 'hide'}`}
        aria-labelledby={`heading${number}`}
        data-parent="#accordion"
      >
        <div className="card-body">
          <ul className="subSystem">
            <li className="subNames row-cols-4">
              <div className="col-6">
                <p>Licenses</p>
              </div>
              <div className="col-1">
                <p>Expires</p>
              </div>
            </li>
            <li>
              <div className="accordion">
                {_.map(subSystem, (s) => (
                  <SubSystem data={s} />
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

System.propTypes = {
  data: PropTypes.object.isRequired,
};

export default System;
