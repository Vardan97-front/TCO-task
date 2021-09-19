import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import SimpleButton from './Buttons/SimpleButton';

export default function Header() {
  const { resource: { pageTitle } } = useSelector((state) => state);
  const { resource: { plans } } = useSelector((state) => state);

  return (
    <div className="container-fluid header">
      <div className="row">
        <div className="col-9">
          <h1 className="title">{pageTitle}</h1>
        </div>
        <nav className="col-2">
          <ul className="headerUl">
            {_.map(plans, (p) => (
              <li className={`headerLi ${p.active ? '' : 'hide'}`} key={p.slug}>
                <div className="proMod">
                  <div className="leftDivIcon" />
                  <div className="rightDivIcon" />
                </div>
                <span className="proModText">
                  {_.upperCase(p.name)}
                </span>
              </li>
            ))}
          </ul>
        </nav>
        <div className="col-1">
          <SimpleButton text="Upgrade Now" classType="primary" />
        </div>
      </div>
    </div>
  );
}
