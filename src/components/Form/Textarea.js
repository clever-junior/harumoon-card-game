import React from 'react';
import PropTypes from 'prop-types';

function Textarea(props) {
  const {
    testId,
    value,
    name,
    title,
    onInputChange,
  } = props;
  return (
    <label htmlFor={ testId }>
      {title}
      <textarea
        data-testid={ testId }
        id={ testId }
        name={ name }
        value={ value }
        onChange={ onInputChange }
      />
    </label>
  );
}

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Textarea;
