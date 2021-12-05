import './styles/App.css';
import CallsList from './components/calls/CallsList';

function App() {
  return (
    <div className='App'>
      <div className='top'>
        <h2>Calls History</h2>
      </div>
      <div className='main'>
        <CallsList />
      </div>
    </div>
  );
}

export default App;
