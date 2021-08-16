import './App.css';
import CounterSizeGenerator from './components/CounterSizeGenerator';
import CounterGroup from './components/CounterGroup';

function App() {
  return (
      <div className="App">
          <CounterSizeGenerator></CounterSizeGenerator>
          <CounterGroup></CounterGroup>
    </div>
  );
}

export default App;
