import styled from 'styled-components';

export const TableTransactions = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  background-color: ${props => props.theme.colors.avatarBackground};
  box-shadow: ${props => props.theme.shadows.small};
  border-radius: ${props => props.theme.borderRadius.itemBorder};
`;

export const THead = styled.thead`
  background-color: ${props => props.theme.colors.violet};
`;

export const Tr = styled.tr`
  text-transform: uppercase;
`;

export const Th = styled.th`
  padding: 5px;
  border-radius: ${props => props.theme.borderRadius.itemBorder};
  color: ${props => props.theme.colors.white};
`;
