import PropTypes from 'prop-types';
import { Section } from 'components/SectionStyled/Section.styled';
import {
  DescriptionWrap,
  Avatar,
  StatsList,
  UserName,
  UserTag,
  UserLocation,
  StatsItem,
  SpanLabel,
  SpanQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Section>
      <DescriptionWrap>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>{tag}</UserTag>
        <UserLocation>{location}</UserLocation>

        <StatsList>
          <StatsItem>
            <SpanLabel>Followers</SpanLabel>
            <SpanQuantity>{stats.followers}</SpanQuantity>
          </StatsItem>
          <StatsItem>
            <SpanLabel>Views</SpanLabel>
            <SpanQuantity>{stats.views}</SpanQuantity>
          </StatsItem>
          <StatsItem>
            <SpanLabel>Likes</SpanLabel>
            <SpanQuantity>{stats.likes}</SpanQuantity>
          </StatsItem>
        </StatsList>
      </DescriptionWrap>
    </Section>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
