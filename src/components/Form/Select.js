import React from 'react';
import PropTypes from 'prop-types';

function Select(props) {
  const rare = ['normal', 'raro', 'muito raro'];
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
      <select
        data-testid={ testId }
        id={ testId }
        name={ name }
        value={ value }
        onChange={ onInputChange }
      >
        <option value={ rare[0] }>{ rare[0] }</option>
        <option value={ rare[1] }>{ rare[1] }</option>
        <option value={ rare[2] }>{ rare[2] }</option>
      </select>
    </label>
  );
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Select;
