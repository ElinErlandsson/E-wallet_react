import './App.css';
import Router from './Router';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link className="logo" to ="/">
        <h1><span>E</span>W@llet</h1>
      </Link>
    <Router/>
    </div>
  );
}

export default App;
