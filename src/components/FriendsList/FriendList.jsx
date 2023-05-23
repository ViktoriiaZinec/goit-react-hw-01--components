import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friends_list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={css.friends_item} key={id}>
          <span
            className={
              isOnline
                ? `${css.friends_status} ${css.red}`
                : `${css.friends_status} ${css.green}`
            }
          ></span>
          <img
            style={{
              backgroundColor: '#3255F2',
              width: '70px',
              height: '70px',
              borderRadius: '5px',
            }}
            className={css.avatar_img}
            src={avatar}
            alt={name}
          />
          <p className={css.friends_name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
