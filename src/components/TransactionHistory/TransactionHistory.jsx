import PropTypes from 'prop-types';
import { Transaction } from 'components/Transaction/Transaction';
import { Section } from 'components/Section/Section.styled';
import { TableTransactions, THead, Th } from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Section>
      <TableTransactions>
        <THead>
          <tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </tr>
        </THead>
        <Transaction items={items} />
      </TableTransactions>
    </Section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
