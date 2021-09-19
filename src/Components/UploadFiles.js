import React from 'react';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const UploadFiles = ({
  deleteImage, files, fileUpload, accept,
}) => (
  <>
    {!_.isEmpty(files)
      ? (
        <div className="images">
          {_.map(files, (file, index) => (
            <div className="singleImage" key={index}>
              <div className="myDelete" onClick={() => deleteImage(index)}>
                <FontAwesomeIcon icon={faTimes} />
              </div>
              <img
                key={index}
                className="image"
                src={_.isObject(file) ? file.preview : file}
                alt={file.name}
              />
            </div>
          ))}
        </div>
      )
      : (
        <div className="inputBlock">
          <div className="downloadBlock">
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
          <label className="uploadButton">
            Choose a file
            {' '}
            <span>to upload or drag it here</span>
            <input
              id="file"
              accept={accept}
              type="file"
              multiple
              onChange={(ev) => fileUpload(ev)}
            />
          </label>
          <span>
            (jpg, png, max size 5mb)
          </span>
        </div>
      )}
  </>
);

UploadFiles.propTypes = {
  deleteImage: PropTypes.func.isRequired,
  fileUpload: PropTypes.func.isRequired,
  files: PropTypes.array.isRequired,
  accept: PropTypes.string.isRequired,
};

export default UploadFiles;
