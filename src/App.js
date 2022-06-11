import {useContext} from 'react';
import './screens/Styles/screens.css';
import './App.css';
import Inventory from './Components/Inventory';
import StartScreen from './screens/StartScreen';
import ActionButtonGroup from './Components/ActionButtonGroup';
import EventLog from './Components/EventLog';
import {ActionContext} from './Providers/ActionProvider';

function App() {
  const {availableActions} = useContext(ActionContext);
  console.log('availableActions', availableActions)
  return (
    <div className="App">

      <div className="items">
        <EventLog />
        <ActionButtonGroup actionMap={availableActions}/>
        <Inventory/>
      </div>
    </div>
  );
}
// https://reactjs.org/docs/dom-elements.html#style

export default App;
