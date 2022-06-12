import { useContext } from 'react';
import Inventory from './components/Inventory';
import ActionButtonGroup from './components/ActionButtonGroup';
import EventLog from './components/EventLog';
import { BackgroundContext } from './providers/BackgroundProvider';
import { DebugContext } from './providers/DebugProvider';
import './styles/App.css';

function App() {
  const { backgroundImage } = useContext(BackgroundContext);
  const { setDebug, debug } = useContext(DebugContext);
  return (
    <div
      className="app"
      style={{
        // backgroundImage: `url(${backgroundImage})`,
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/${backgroundImage})`,
      }}
    >
      <button type="button" className="debug" onClick={() => setDebug(!debug)}>
        Debug
      </button>
      <div className="content">
        <EventLog />
        <ActionButtonGroup />
        <Inventory />
      </div>
    </div>
  );
}
export default App;
