import styled from 'styled-components';

export const TableTransactions = styled.table`
  width: 100%;
  text-align: center;
  background-color: ${props => props.theme.colors.avatarBackground};
  box-shadow: ${props => props.theme.shadows.small};
  border-radius: ${props => props.theme.borderRadius.itemBorder};
`;

export const THead = styled.thead`
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.blue};
  text-transform: uppercase;
`;

export const Th = styled.th`
  padding: 10px;
  border-radius: ${props => props.theme.borderRadius.itemBorder};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${props => props.theme.colors.gray};
`;

export const Tr = styled.tr``;
