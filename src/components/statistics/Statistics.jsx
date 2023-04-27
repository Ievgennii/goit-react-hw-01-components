import PropTypes from 'prop-types';
import Data from './Data';
import css from './statistics.module.css';

function Statistics({ data = [] }) {
  return (
    <ul className={css.statList}>
      {data.map(dataItem => (
        <li className={css.item} key={dataItem.id}>
          <Data label={dataItem.label} percentage={dataItem.percentage} />
        </li>
      ))}
    </ul>
  );
}

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Statistics;
