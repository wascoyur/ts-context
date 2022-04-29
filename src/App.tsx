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

  return (
    <PostsContext.Provider value={postsContextDefaultValue}>
      <div className='App'>App</div>
      <PostsList />
    </PostsContext.Provider>
  );
}

export default App;
