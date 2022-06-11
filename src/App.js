import { useContext } from "react";
import Inventory from "./Components/Inventory";
import ActionButtonGroup from "./Components/ActionButtonGroup";
import EventLog from "./Components/EventLog";
import { ActionContext } from "./Providers/ActionProvider";
import "./App.css";

function App() {
  const { availableActions } = useContext(ActionContext);
  console.log("availableActions", availableActions);
  return (
    <div className="App">
      <div className="items">
        <EventLog />
        <ActionButtonGroup actionMap={availableActions} />
        <Inventory />
      </div>
    </div>
  );
}
export default App;
