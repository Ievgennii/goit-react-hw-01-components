import { Profile } from './profile/Profile';
import Section from './statistics/Section';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        statsFollowers={user.stats.followers}
        statsViews={user.stats.views}
        statsLikes={user.stats.likes}
      />
      <Section title="Upload stats">
        <Statistics data={data} />
      </Section>
      <FriendList friends={friends} />
    </div>
  );
};
