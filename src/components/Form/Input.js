import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const {
    type,
    testId,
    value,
    name,
    title,
    onInputChange,
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
        checked={ value }
        onChange={ onInputChange }
      />
    </label>
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Input;
