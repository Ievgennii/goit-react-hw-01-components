import PropTypes from 'prop-types';

function Data({ label, percentage }) {
  return (
    <>
      <span class="label">{label}</span>
      <span class="percentage">{percentage} %</span>
    </>
  );
}

Data.propTypes = {
  label:PropTypes.string,
  percentage:PropTypes.number,
}

export default Data;
