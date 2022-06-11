import React, { createContext, useState, useEffect, useContext } from "react";
import { InventoryContext } from "./InventoryProvider";
import background1 from '../images/1.JPG';
import background2 from '../images/2.JPG';

const ActionContext = createContext();

const initialActions = {
  pickUpTrash: "pick up trash",
  filterRiver: "Filter out trash from river",
};

const buildActions = {
  recycler: "Fix recycler",
  net: "build net",
  waterFilter: "build waterFilter",
  airFilter: "build airFilter",
  // 'workshop': 'build workshop',
  // 'solarPanel': 'build solar panels',
  // 'windmill': 'build windmill',
  // 'automaticTrashPicker': 'build automatic trash picker',
  // 'automaticTrashFilter': 'build automatic trash filter',
  // 'automaticWaterFilter': 'build automatic water filter',
  // 'automaticAirFilter': 'build automatic air filter',
  bridge: "build bridge",
};

const ActionProvider = ({ children }) => {
  const { addItem, playerItems, playerStructures, setPlayerStructures } = useContext(InventoryContext);
  const [currentAction, setCurrentAction] = useState(null);
  const [availableActions, setAvailableActions] = useState(initialActions);
  const [environmentLevel, setEnvironmentLevel] = useState(0);
  const [backgroundImageUrl, setBackgroundImageUrl] = useState(background1);

  const [playerActionCount, setPlayerActionCount] = useState({});

  useEffect(() => {
    if (!currentAction) {
      return;
    }

    try {
      switch (currentAction) {
        case "pickUpTrash":
          addItem("trash", 1);
          break;
        case "filterRiver":
          addItem("wood", 1);
          break;
        case "fixRecycler":
          setPlayerStructures({
            ...playerStructures,
            recycler: true,
          })
          setBackgroundImageUrl(background2);
          break;
        case "useRecycler":

          break;
        default:
          throw Error(`Unknown action: ${currentAction}`);
      }
      addPlayerActionCount(currentAction);
    } catch (e) {}
    setCurrentAction(null);
  }, [currentAction]);

  const addPlayerActionCount = (playerAction) => {
    if (playerAction in playerActionCount) {
      setPlayerActionCount({
        ...playerActionCount,
        [playerAction]: playerActionCount[playerAction] + 1,
      });
    } else {
      setPlayerActionCount({
        ...playerActionCount,
        [playerAction]: 1,
      });
    }
  }

  useEffect(() => {
    if (playerActionCount.pickUpTrash === 10) {
      setAvailableActions({
        ...availableActions,
        fixRecycler: 'Fix recycler'
      })
    }

    if (playerStructures.recycler) {
      setAvailableActions({
        ...availableActions,
        useRecycler: 'Recycle trash'
      })
    }

  }, [playerItems, playerActionCount, playerStructures]);

  return (
    <ActionContext.Provider
      value={{
        currentAction,
        setCurrentAction,
        availableActions,
        backgroundImageUrl
      }}
    >
      {children}
    </ActionContext.Provider>
  );
};

export { ActionContext, ActionProvider };
