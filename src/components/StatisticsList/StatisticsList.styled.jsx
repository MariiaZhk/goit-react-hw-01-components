import styled from 'styled-components';

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing(1)};
  padding: 15px;
  border-radius: ${props => props.theme.borderRadius.itemBorder};
  box-shadow: ${props => props.theme.shadows.small};
  background-color: ${props => props.$bgColor};
`;

export const SpanStatsLabel = styled.span`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.normal};
`;

export const SpanStatsPercentage = styled.span`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.semiBold};
`;
