import { Post, Loader, FriendsList, CreatePost } from '../components';
import styles from '../styles/home.module.css';
import { useAuth, usePosts } from '../hooks';

const Home = () => {
  const auth = useAuth();
  const posts = usePosts();

  if (posts.loading) {
    return <Loader />;
  }

  return (
    <div className={styles.home} style={{ 
      backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8IgsSGabPpH1X2HpYZYaumssnp4DwdagVUw&usqp=CAU")` 
    }}>
      <div className={styles.postsList}>
        <CreatePost />
        {posts.data.map((post) => (
          <Post post={post} key={`post-${post._id}`} />
        ))}
      </div>
      {auth.user && <FriendsList />}
    </div>
  );
};

export default Home;
