import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const SubSystem = ({ data }) => {
  const [number] = useState(_.uniqueId());

  console.log(data);
  return (
    <div className="card position-relative">
      <div className="card-header " id={`heading${number}`}>
        <h5 className="mb-0 systemLines">
          <div className="col-6 name">
            <p>
              {data.licenses}
            </p>
          </div>
          <div className="col-1">
            <p>
              {data.expires}
            </p>
          </div>
          <div className="col-5">
            <p>
              Download
            </p>
          </div>
        </h5>
      </div>
    </div>
  );
};

SubSystem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SubSystem;
