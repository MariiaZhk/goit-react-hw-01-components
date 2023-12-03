import PropTypes from 'prop-types';
import {
  StatsList,
  StatsItem,
  SpanStatsLabel,
  SpanStatsPercentage,
} from './StatisticsListItem.styled';
import { getRandomColor } from 'helpers/getRandomColor';

export const StatisticsList = ({ stats }) => {
  return (
    <StatsList>
      {stats.map(({ id, label, percentage }) => {
        return (
          <StatsItem key={id} $bgColor={getRandomColor()}>
            <SpanStatsLabel>{label}</SpanStatsLabel>
            <SpanStatsPercentage>{percentage}</SpanStatsPercentage>
          </StatsItem>
        );
      })}
    </StatsList>
  );
};

StatisticsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
