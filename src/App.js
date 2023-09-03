import './App.css';
import { useRouters } from './Components/router/routers';

function App() {
  return (
    <div className="App">
      {useRouters()}
    </div>
  );
}

export default App;
