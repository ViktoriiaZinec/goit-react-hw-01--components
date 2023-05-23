// import css from './FriendList.module.css';
// import PropTypes from 'prop-types';

// export const FriendList = ({ friends }) => {
//   console.log('friends', friends);
//   const ret = (
//     <ul className={css.friends_list}>
//       {friends.map(({ avatar, name, isOnline, id }) => (
//         <li className={css.friends_item} key={id}>
//           <span className={css.friends_status}>{isOnline}</span>
//           <img className={css.avatar_img} src={avatar} alt={name} />
//           <p className={css.friends_name}>{name}</p>
//         </li>
//       ))}
//     </ul>
//   );
//   console.log('ret', ret);
//   return ret;
// };

// FriendList.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
//   id: PropTypes.number.isRequired,
// };
