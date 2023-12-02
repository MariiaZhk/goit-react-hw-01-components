import styled from 'styled-components';

export const FriendListStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${props => props.theme.spacing(8)};
`;
