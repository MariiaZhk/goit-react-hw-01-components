import PropTypes from 'prop-types';
import { Td, Tr } from './Transaction.styled';

export const Transaction = ({ items }) => {
  return (
    <tbody>
      {items.map(({ id, type, amount, currency }) => {
        return (
          <tr key={id}>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </tr>
        );
      })}
    </tbody>
  );
};

Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
