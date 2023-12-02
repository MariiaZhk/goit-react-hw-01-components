import styled from 'styled-components';

export const FriendListItemStyled = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  min-width: 360px;
  gap: ${props => props.theme.spacing(5)};
  padding: 20px;
  border-radius: ${props => props.theme.borderRadius.itemBorder};
  box-shadow: ${props => props.theme.shadows.small};
  background: ${props => props.theme.colors.avatarBackground};
`;

export const FriendAvatar = styled.img`
  width: 180px;
  background: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.small};
  border-radius: ${props => props.theme.borderRadius.itemBorder};
`;

export const FriendName = styled.p`
  font-size: ${props => props.theme.fontSizes.extraLarge};
  font-weight: ${props => props.theme.fontWeights.extraBold};
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.$status ? 'green' : 'red')};
`;
