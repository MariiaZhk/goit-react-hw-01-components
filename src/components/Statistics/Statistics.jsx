import PropTypes from 'prop-types';
import { StatisticsList } from 'components/StatisticsListItem/StatisticsListItem';
// import { StatsTitle } from './Statistics.styled';
import { Section } from 'components/Section/Section.styled';
import { Title } from 'components/Title/Title.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>Upload stats</Title>}
      <StatisticsList stats={stats} />
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};