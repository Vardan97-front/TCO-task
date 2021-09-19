import React from 'react';
import PropTypes from 'prop-types';

export default function SimpleButton({ text, classType }) {
  return (
    <button type="button" className={`btn btn-${classType} simpleButton`}>
      {text}
    </button>
  );
}

SimpleButton.propTypes = {
  text: PropTypes.string.isRequired,
  classType: PropTypes.string.isRequired,
};
