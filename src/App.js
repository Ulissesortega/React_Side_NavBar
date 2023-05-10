import './App.css';
import Sidebar from './Components/Sidebar'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Sidebar />

    </Router>
  );
}

export default App;