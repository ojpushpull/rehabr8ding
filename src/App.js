import logo from './logo.svg';
import './App.css';
import UserProfile from './rehabs'
import data from './api/nyrehabs.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserProfile data={data} />
       
      </header>
    </div>
  );
}

export default App;
