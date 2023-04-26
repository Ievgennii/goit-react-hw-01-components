import Friend from "./Friend";

function FriendList ({friends=[]}) {

  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <li key={friend.id}>
          <Friend isOnline={friend.isOnline} avatar={friend.avatar} name={friend.name}/>
        </li>
      ))}
    </ul>
  );
}

export default FriendList