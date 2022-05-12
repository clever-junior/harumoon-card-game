import React from 'react';
import PropTypes from 'prop-types';

function Select(props) {
  const rare = ['normal', 'raro', 'muito raro'];
  const {
    testId,
    // value,
    name,
    title,
  } = props;
  return (
    <label htmlFor={ testId }>
      {title}
      <select data-testid={ testId } id={ testId } name={ name }>
        <option value={ rare[0] }>{ rare[0] }</option>
        <option value={ rare[1] }>{ rare[1] }</option>
        <option value={ rare[2] }>{ rare[2] }</option>
      </select>
    </label>
  );
}

Select.propTypes = {
  /* value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired, */
  testId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Select;
