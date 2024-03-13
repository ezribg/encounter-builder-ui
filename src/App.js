import './App.css';
import EncounterPage from './pages/EncounterPage/EncounterPage';

function App() {
  return (
    <div className="App">
      <header className="App-header" data-testid="encounter-page">
        <EncounterPage/>
      </header>
    </div>
  );
}

export default App;
