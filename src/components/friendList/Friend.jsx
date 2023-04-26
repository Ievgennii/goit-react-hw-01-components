function Friend({ isOnline, avatar, name }) {
  return (
    <div class="item">
      <span class="status"></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </div>
  );
}

export default Friend;
