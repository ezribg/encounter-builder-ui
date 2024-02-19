import logo from './logo.svg';
import './App.css';
import CreatureCard from './components/CreatureCard/CreatureCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CreatureCard/>
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
