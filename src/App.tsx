import './App.css';
import AddTodo from './components/AddTodo';
import { TodoProvider } from './context/TodoContext';

function App() {
  return (
    <TodoProvider>
      <div className='App'>
        App
        <AddTodo />
      </div>
    </TodoProvider>
  );
}

export default App;
