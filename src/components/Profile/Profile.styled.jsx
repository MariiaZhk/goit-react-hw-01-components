import styled from 'styled-components';

export const DescriptionWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: ${props => props.theme.spacing(3)};
`;

export const Avatar = styled.img`
  width: 250px;
  background: ${props => props.theme.colors.avatarBackground};
  border-radius: 50%;
  box-shadow: ${props => props.theme.shadows.regular};
`;

export const UserName = styled.p`
  font-size: ${props => props.theme.fontSizes.extraLarge};
  font-weight: ${props => props.theme.fontWeights.extraBold};
`;

export const UserTag = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  font-style: italic;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: ${props => props.theme.colors.gray};
`;

export const UserLocation = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  font-style: italic;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: ${props => props.theme.colors.gray};
`;

export const StatsList = styled.ul`
  display: flex;
  gap: ${props => props.theme.spacing(3)};
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  padding: 10px;
  border-radius: ${props => props.theme.borderRadius.itemBorder};
  background: ${props => props.theme.colors.avatarBackground};
  box-shadow: ${props => props.theme.shadows.small};
  font-size: ${props => props.theme.fontSizes.small};
`;

export const SpanLabel = styled.span`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.semiBold};
`;

export const SpanQuantity = styled.span`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.normal};
`;
