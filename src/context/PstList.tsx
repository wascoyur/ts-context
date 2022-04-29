import { useContext } from 'react';
import { PostsContext } from './PostsContext';

export const PostsList = () => {
  const { posts } = useContext(PostsContext);
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
