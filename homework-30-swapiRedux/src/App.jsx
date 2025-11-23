import PersonList from './components/PersonList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>STAR WARS</h1>
        <p>Виберіть персонажа для перегляду деталей</p>
      </header>
      
      <main>
        <PersonList />
      </main>
    </div>
  );
}

export default App;