import styled from 'styled-components';

export const TBody = styled.tbody`
  text-shadow: 1px 1px ${props => props.theme.colors.lightGray};
  background-color: ${props => props.theme.colors.avatarBackground};
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
