import PropTypes from 'prop-types';

function Data({ label, percentage }) {
  return (
    <div class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage} %</span>
    </div>
  );
}

Data.propTypes = {
  label:PropTypes.string,
  percentage:PropTypes.number,
}

export default Data;
