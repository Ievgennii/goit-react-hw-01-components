import PropTypes from 'prop-types';
import Action from './action';
import css from './transactions.module.css'

function Transactions({ transactions = [] }) {
  return (
    <table className={css}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <>
          {transactions.map(action => (
            <tr key={action.id}>
              <Action
                type={action.type}
                amount={action.amount}
                currency={action.currency}
              />
            </tr>
          ))}
        </>
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Transactions;
