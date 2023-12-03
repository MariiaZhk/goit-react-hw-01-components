import PropTypes from 'prop-types';
import { Transaction } from 'components/Transaction/Transaction';
import { Section } from 'components/SectionStyled/Section.styled';
import { TableTransactions, THead, Tr, Th } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Section>
      <TableTransactions>
        <THead>
          <Tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </Tr>
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
