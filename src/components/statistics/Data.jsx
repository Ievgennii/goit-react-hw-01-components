import PropTypes from 'prop-types';
import css from './statistics.module.css';
import getRandomHexColor from '../../utils/getRandomHexColor';

function Data({ label, percentage }) {
  const itemStyles = {
    display: 'grid',

    backgroundColor: getRandomHexColor(),
  };
  return (
    <div style={itemStyles}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </div>
  );
}

Data.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Data;
