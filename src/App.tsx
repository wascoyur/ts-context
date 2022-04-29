import './App.css';
import { PostsList } from './component/PostsList';
import { postsContextDefaultValue } from './context/postsContextDefaultValue';
import { PostsContext } from './context/PostsContext';
import { useCallback, useState } from 'react';
import { Post } from './context/interfaces';

function App() {
   const [posts, setPosts] = useState<Post[]>([]);
   const [isLoading, setIsLoading] = useState(false);

   const fetchPosts = useCallback(() => {
     setIsLoading(true);
     fetch('https://jsonplaceholder.typicode.com/posts')
       .then((response) => response.json())
       .then((fetchedPosts) => {
         setPosts(fetchedPosts);
       })
       .finally(() => {
         setIsLoading(false);
       });
   }, [setPosts]);
const removePost = useCallback(
  (postId: number) => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE',
    })
      .then(() => {
        const newPosts = [...posts];
        const removedPostIndex = newPosts.findIndex(
          (post) => post.id === postId,
        );
        if (removedPostIndex > -1) {
          newPosts.splice(removedPostIndex, 1);
        }
        setPosts(newPosts);
      })
      .finally(() => {
        setIsLoading(false);
      });
  },
  [setPosts, posts],
);
  return (
    <PostsContext.Provider value={postsContextDefaultValue}>
      <div className='App'>App</div>
      <PostsList />
    </PostsContext.Provider>
  );
}

export default App;
