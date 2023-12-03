import styled from 'styled-components';

export const TableTransactions = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  background-color: ${props => props.theme.colors.avatarBackground};
  box-shadow: ${props => props.theme.shadows.small};
  border-radius: ${props => props.theme.borderRadius.itemBorder};
`;

export const THead = styled.thead``;

export const Tr = styled.tr`
  background-color: ${props => props.theme.colors.blue};
  text-transform: uppercase;
`;

export const Th = styled.th`
  padding: 5px;
  border-radius: ${props => props.theme.borderRadius.itemBorder};
  color: ${props => props.theme.colors.white};
`;
