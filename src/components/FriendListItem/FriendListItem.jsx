import PropTypes from 'prop-types';
import {
  FriendListItemStyled,
  FriendAvatar,
  FriendName,
  FriendStatus,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItemStyled>
      <FriendStatus $status={isOnline}>{isOnline}</FriendStatus>
      <FriendAvatar src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendListItemStyled>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
