import { useContext } from 'react';
import './App.css';
import AppCtx from './context/AppCtx';

function App() {
  const context: unknown = useContext(AppCtx);
  return (
    <AppCtx>
      <div className='App'>App</div>
    </AppCtx>
  );
}

export default App;
