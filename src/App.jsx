import { useContext } from 'react';
import Inventory from './components/Inventory';
import ActionButtonGroup from './components/ActionButtonGroup';
import EventLog from './components/EventLog';
import { BackgroundContext } from './providers/BackgroundProvider';
import './styles/App.css';

function App() {
  const { backgroundImage } = useContext(BackgroundContext);
  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div>
        <h1 className='title'>Help us clean this area!</h1>
        <div className="content">
          <EventLog />
          <ActionButtonGroup />
          <Inventory />
        </div>
      </div>  
    </div>
  );
}
export default App;
