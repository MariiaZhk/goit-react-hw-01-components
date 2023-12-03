import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { Section } from 'components/SectionStyled/Section.styled';
import { FriendListStyled } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Section>
      <FriendListStyled>
        {friends.map(({ id, avatar, name, isOnline }) => {
          return (
            <FriendListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          );
        })}
      </FriendListStyled>
    </Section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
