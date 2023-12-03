import styled from 'styled-components';

export const TBody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  text-shadow: 1px 1px ${props => props.theme.colors.lightGray};
`;

export const Tr = styled.tr`
  &:nth-child(odd) {
    background-color: ${props => props.theme.colors.white};
  }
`;

export const Td = styled.td`
  padding: 5px;
  border: 1px solid ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes.medium};
`;
