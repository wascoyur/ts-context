import './App.css';
import { PostsList } from './component/PostsList';
import { postsContextDefaultValue } from './context/postsContextDefaultValue';
import { PostsContext } from './context/PostsContext';

function App() {
  return (
    <PostsContext.Provider value={postsContextDefaultValue}>
      <div className='App'>App</div>
      <PostsList />
    </PostsContext.Provider>
  );
}

export default App;
