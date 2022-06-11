import { useContext } from 'react';
import Inventory from './components/Inventory';
import ActionButtonGroup from './components/ActionButtonGroup';
import EventLog from './components/EventLog';
import { ActionContext } from './providers/ActionProvider';
import './styles/App.css';

function App() {
  const { availableActions, backgroundImage } = useContext(ActionContext);
  console.log('availableActions', availableActions);
  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="items">
        <ActionButtonGroup actionMap={availableActions} />
        <Inventory />
        <EventLog />
      </div>
    </div>
  );
}
export default App;
