import PropTypes from 'prop-types';
import { StatisticsList } from 'components/StatisticsList/StatisticsList';
import { Section } from 'components/SectionStyled/Section.styled';
import { Title } from 'components/TitleStyled/Title.styled';

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
