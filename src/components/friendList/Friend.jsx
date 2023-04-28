import PropTypes from 'prop-types';
import css from "./FriendList.module.css"

function Friend({ isOnline, avatar, name }) {
  console.log(isOnline)
  
  return (
    <>
      <span className={css[isOnline]}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  
}

export default Friend;
