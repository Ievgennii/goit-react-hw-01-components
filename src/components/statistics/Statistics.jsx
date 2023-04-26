import PropTypes from 'prop-types';
import Data from './Data';

function Statistics({ data = [] }) {
  return (
    <ul class="stat-list">
      {data.map(dataItem => (
        <li class="item" key={dataItem.id}>
          <Data label={dataItem.label} percentage={dataItem.percentage}/>
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
