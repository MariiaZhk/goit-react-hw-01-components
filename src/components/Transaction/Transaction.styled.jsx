import styled from 'styled-components';

export const Tr = styled.tr``;

export const Td = styled.td`
  padding: 5px;
  border: 1px solid ${props => props.theme.colors.gray};

  color: ${({ theme }) => theme.colors.dark};
  &:nth-of-type(odd) {
    background-color: ${props => props.theme.colors.white};
  }
`;
