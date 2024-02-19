import logo from './logo.svg';
import './App.css';
import StatBlock from './components/StatBlock/StatBlock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StatBlock/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Booty
        </a>
      </header>
    </div>
  );
}

export default App;
