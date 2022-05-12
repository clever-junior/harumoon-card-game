import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const {
    type,
    testId,
    value,
    name,
    title,
  } = props;
  return (
    <label htmlFor={ testId }>
      { title }
      <input
        type={ type }
        data-testid={ testId }
        id={ testId }
        name={ name }
        value={ value }
      />
    </label>
  );
}

Input.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  type: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Input;
