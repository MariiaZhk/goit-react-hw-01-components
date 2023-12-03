import styled from 'styled-components';

export const Tr = styled.tr`
  &:nth-child(odd) {
    background-color: ${props => props.theme.colors.white};
  }
`;

export const Td = styled.td`
  padding: 5px;
  border: 1px solid ${props => props.theme.colors.gray};
`;
