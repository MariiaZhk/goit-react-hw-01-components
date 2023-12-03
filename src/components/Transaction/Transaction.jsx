import PropTypes from 'prop-types';
import { TBody, Td, Tr } from './Transaction.styled';

export const Transaction = ({ items }) => {
  return (
    <TBody>
      {items.map(({ id, type, amount, currency }) => {
        return (
          <Tr key={id}>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </Tr>
        );
      })}
    </TBody>
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
