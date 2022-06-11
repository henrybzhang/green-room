import { useContext } from "react";
import Inventory from "./Components/Inventory";
import ActionButtonGroup from "./Components/ActionButtonGroup";
import EventLog from "./Components/EventLog";
import { ActionContext } from "./Providers/ActionProvider";
import "./App.css";

function App() {
  const { availableActions, backgroundImageUrl } = useContext(ActionContext);
  console.log("availableActions", availableActions);
  console.log(backgroundImageUrl)
  return (
    <div className="App" style={{
      backgroundImage: "url(" + backgroundImageUrl + ")"
    }}>
      <div className="items">
        <ActionButtonGroup actionMap={availableActions} />
        <Inventory />
        <EventLog />
      </div>
    </div>
  );
}
export default App;
