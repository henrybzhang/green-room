import React, {
  createContext, useState, useEffect, useContext,
} from 'react';
import { InventoryContext } from './InventoryProvider';

const ActionContext = createContext();

const initialActions = {
  pickUpTrash: 'Pick up trash',
};

const landTrashItems = ['trash', 'wood', 'metal', 'plastic'];
const riverTrashItems = ['trash', 'plastic'];

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

const actionKeySet = new Set([
  'pickUpTrash',
  'buildRecycler',
  'useRecycler',
  'buildAirFilter',
  'buildNet',
  'useNet',
  'buildBridge',
]);

function ActionProvider({ children }) {
  const {
    addItem, playerItems, playerStructures, setPlayerStructures,
  } = useContext(InventoryContext);
  const [currentAction, setCurrentAction] = useState(null);
  const [availableActions, setAvailableActions] = useState(initialActions);
  const [playerActionCount, setPlayerActionCount] = useState({});
  const [environmentLevel, setEnvironmentLevel] = useState(1);

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
    if (!currentAction) {
      return;
    }

    try {
      if (!actionKeySet.has(currentAction)) {
        throw Error(`Unknown action: ${currentAction}`);
      }

      switch (currentAction) {
        case 'pickUpTrash':
          {
            const itemName = landTrashItems[Math.floor(Math.random() * landTrashItems.length)];
            addItem(itemName, 1);
          }
          break;
        case 'buildRecycler':
          setPlayerStructures({
            ...playerStructures,
            recycler: true,
          });
          break;
        case 'useRecycler':
          break;
        case 'buildAirFilter':
          setPlayerStructures({
            ...playerStructures,
            airFilter: true,
          });
          break;
        case 'buildNet':
          setPlayerStructures({
            ...playerStructures,
            net: true,
          });
          break;
        case 'useNet':
          {
            const itemName = riverTrashItems[
              Math.floor(Math.random() * riverTrashItems.length)
            ];
            addItem(itemName, 1);
          }
          break;
        case 'buildBridge':
          setPlayerStructures({
            ...playerStructures,
            bridge: true,
          });
          break;
        default:
          throw Error(`Undeveloped action: ${currentAction}`);
      }
      addPlayerActionCount(currentAction);
    } catch (e) {
      console.log(e);
    }
    setCurrentAction(null);
  }, [currentAction]);

  useEffect(() => {
    setAvailableActions({
      pickUpTrash: 'Pick up trash',
      ...(playerItems.metal > 5
        && !playerStructures.recycler && { buildRecycler: 'Fix recycler' }),
      ...(playerItems.trash
        && playerStructures.recycler && { useRecycler: 'Recycle trash' }),
      ...(playerItems.plastic > 5
        && playerItems.wood > 5
        && !playerStructures.airFilter
        && playerStructures.recycler && {
        buildAirFilter: 'Construct air filter',
      }),
      ...(playerItems.plastic > 5
        && !playerStructures.net
        && playerStructures.airFilter && { buildNet: 'Construct river net' }),
      ...(playerStructures.net && { useNet: 'Filter river trash' }),
      ...(playerItems.wood > 10
        && playerItems.metal > 10
        && environmentLevel === 4 && { buildBridge: 'Construct a bridge' }),
    });
  }, [playerItems, environmentLevel, playerStructures]);

  useEffect(() => {
    let newEnvironmentLevel = environmentLevel;
    if (environmentLevel === 1 && playerActionCount.pickUpTrash >= 10) {
      newEnvironmentLevel = 2;
    } else if (
      environmentLevel === 2
      && playerActionCount.pickUpTrash >= 10
      && playerStructures.airFilter
    ) {
      newEnvironmentLevel = 3;
    } else if (environmentLevel === 3 && playerActionCount.useNet >= 5) {
      newEnvironmentLevel = 4;
    } else if (environmentLevel === 4 && playerStructures.bridge) {
      newEnvironmentLevel = 5;
    } else if (environmentLevel === 5 && playerActionCount.pickUpTrash >= 10) {
      newEnvironmentLevel = 6;
    } else {
      return;
    }
    setPlayerActionCount({});
    setEnvironmentLevel(newEnvironmentLevel);
  }, [playerStructures, environmentLevel, playerActionCount]);

  return (
    <ActionContext.Provider
      value={{
        currentAction,
        setCurrentAction,
        availableActions,
        environmentLevel,
      }}
    >
      {children}
    </ActionContext.Provider>
  );
}

export { ActionContext, ActionProvider, actionKeySet };
