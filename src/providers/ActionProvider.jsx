import React, {
  createContext, useState, useEffect, useContext,
} from 'react';
import { InventoryContext } from './InventoryProvider';
import background1 from '../images/1.JPG';
import background2 from '../images/2.JPG';

const ActionContext = createContext();

const initialActions = {
  pickUpTrash: 'Pick up trash',
};

const pickUpItems = ['trash', 'wood', 'metal', 'plastic'];

const buildActions = {
  recycler: 'Fix recycler',
  net: 'build net',
  waterFilter: 'build waterFilter',
  airFilter: 'build airFilter',
  // 'workshop': 'build workshop',
  // 'solarPanel': 'build solar panels',
  // 'windmill': 'build windmill',
  // 'automaticTrashPicker': 'build automatic trash picker',
  // 'automaticTrashFilter': 'build automatic trash filter',
  // 'automaticWaterFilter': 'build automatic water filter',
  // 'automaticAirFilter': 'build automatic air filter',
  bridge: 'build bridge',
};

function ActionProvider({ children }) {
  const {
    addItem, playerItems, playerStructures, setPlayerStructures,
  } = useContext(InventoryContext);
  const [currentAction, setCurrentAction] = useState(null);
  const [availableActions, setAvailableActions] = useState(initialActions);
  const [backgroundImage, setBackgroundImage] = useState(background1);

  const [playerActionCount, setPlayerActionCount] = useState({});

  useEffect(() => {
    if (!currentAction) {
      return;
    }

    try {
      switch (currentAction) {
        case 'pickUpTrash':
          {
            const itemName = pickUpItems[Math.floor(Math.random() * pickUpItems.length)];
            addItem(itemName, 1);
          }
          break;
        case 'filterRiver':
          addItem('wood', 1);
          break;
        case 'fixRecycler':
          setPlayerStructures({
            ...playerStructures,
            recycler: true,
          });
          setBackgroundImage(background2);
          break;
        case 'useRecycler':
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
  };

  useEffect(() => {
    setAvailableActions({
      pickUpTrash: 'Pick up trash',
      ...(playerActionCount.pickUpTrash >= 10
        && !playerStructures.recycler && { fixRecycler: 'Fix recycler' }),
      ...(playerItems.trash
        && playerStructures.recycler && { useRecycler: 'Recycle trash' }),
    });
  }, [playerItems, playerActionCount, playerStructures]);

  return (
    <ActionContext.Provider
      value={{
        currentAction,
        setCurrentAction,
        availableActions,
        backgroundImage,
      }}
    >
      {children}
    </ActionContext.Provider>
  );
}

export { ActionContext, ActionProvider };
