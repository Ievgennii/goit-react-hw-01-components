import PropTypes from 'prop-types';
import Friend from "./Friend";

function FriendList ({friends=[]}) {

  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <li class="item" key={friend.id}>
          <Friend isOnline={friend.isOnline} avatar={friend.avatar} name={friend.name}/>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList