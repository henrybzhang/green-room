import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
} from 'react';
import { InventoryContext } from './InventoryProvider';

const ActionContext = createContext();

const initialActions = {
  pickUpTrash: 'Pick up trash',
};

// const buildingRequirements = {
//   recycler: {
//     metal: -5,
//   },
//   airFilter: {
//     wood: -5,
//   },
//   net: {
//     plastic: -5,
//   },
//   bridge: {
//     wood: -10,
//     metal: -10,
//   },
// };
const buildingRequirements = {
  recycler: {
    metal: -1,
  },
  airFilter: {
    wood: -1,
  },
  net: {
    plastic: -1,
  },
  bridge: {
    wood: -1,
    metal: -1,
  },
};

const landTrashItems = ['trash', 'wood', 'metal', 'plastic'];
const riverTrashItems = ['trash', 'plastic'];
const trashRefinedItems = ['wood', 'metal', 'plastic'];

const actionKeySet = new Set([
  'pickUpTrash',
  'buildRecycler',
  'useRecycler',
  'buildAirFilter',
  'plantSeeds',
  'buildNet',
  'useNet',
  'buildBridge',
]);

function ActionProvider({ children }) {
  const {
    playerItems, updateItems, playerStructures, setPlayerStructures,
  } = useContext(InventoryContext);
  const [currentAction, setCurrentAction] = useState(null);
  const [availableActions, setAvailableActions] = useState(initialActions);
  const [playerActionCount, setPlayerActionCount] = useState({});
  const [environmentLevel, setEnvironmentLevel] = useState(1);
  const [nextText, setNextText] = useState(null);

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

  const checkBuildingRequirements = (buildingName) => {
    let missingRequirements = false;
    Object.entries(buildingRequirements[buildingName]).forEach(
      ([itemName, amount]) => {
        if (playerItems[itemName] + amount >= 0) {
          missingRequirements = true;
        }
      },
    );

    return missingRequirements;
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
            let newText = 'The surrounding area has been slightly cleared of trash';
            if (itemName !== 'trash') {
              newText = `Clearing some trash has provided some useful ${itemName}`;
            }
            setNextText(newText);
            updateItems({ [itemName]: 1 });
          }
          break;
        case 'buildRecycler':
          setPlayerStructures({
            ...playerStructures,
            recycler: true,
          });
          setNextText('The recycler is now operational');
          updateItems(buildingRequirements.recycler);
          break;
        case 'useRecycler':
          {
            const itemName = trashRefinedItems[
              Math.floor(Math.random() * trashRefinedItems.length)
            ];
            setNextText(`Some ${itemName} has been recycled from trash`);
            updateItems({ [itemName]: 1, trash: -1 });
          }
          break;
        case 'buildAirFilter':
          setPlayerStructures({
            ...playerStructures,
            airFilter: true,
          });
          setNextText(
            'An air filter has begun to reduce the amount of smog in the air',
          );
          updateItems(buildingRequirements.airFilter);
          break;
        case 'plantSeeds':
          setNextText('The beginnings of new life have been planted');
          break;
        case 'buildNet':
          setPlayerStructures({
            ...playerStructures,
            net: true,
          });
          setNextText(
            'Removing trash in the disgusting river is now a possibility',
          );
          updateItems(buildingRequirements.net);
          break;
        case 'useNet':
          {
            const itemName = riverTrashItems[
              Math.floor(Math.random() * riverTrashItems.length)
            ];
            updateItems({ [itemName]: 1 });
            setNextText(`Some ${itemName} has been removed from the river`);
          }
          break;
        case 'buildBridge':
          setPlayerStructures({
            ...playerStructures,
            bridge: true,
          });
          updateItems(buildingRequirements.bridge);
          setNextText('The river can now be crossed');
          break;
        default:
          throw Error(`Undeveloped action: ${currentAction}`);
      }
      addPlayerActionCount(currentAction);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
    setCurrentAction(null);
  }, [currentAction, environmentLevel]);

  useEffect(() => {
    if (environmentLevel === 7) {
      setAvailableActions({});
      return;
    }

    setAvailableActions({
      ...((environmentLevel <= 2 || environmentLevel === 6) && {
        pickUpTrash: 'Pick up trash',
      }),
      ...(checkBuildingRequirements('recycler')
        && !playerStructures.recycler && { buildRecycler: 'Fix recycler' }),
      ...(playerItems.trash
        && playerStructures.recycler && { useRecycler: 'Recycle trash' }),
      ...(checkBuildingRequirements('airFilter')
        && !playerStructures.airFilter
        && playerStructures.recycler
        && environmentLevel === 2 && {
        buildAirFilter: 'Construct air filter',
      }),
      ...(environmentLevel === 3 && {
        plantSeeds: 'Plant seeds',
      }),
      ...(checkBuildingRequirements('net')
        && !playerStructures.net
        && environmentLevel === 4 && { buildNet: 'Construct river net' }),
      ...(playerStructures.net
        && environmentLevel === 4 && { useNet: 'Filter river trash' }),
      ...(checkBuildingRequirements('bridge')
        && environmentLevel === 5 && { buildBridge: 'Construct a bridge' }),
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
    } else if (environmentLevel === 3 && playerActionCount.plantSeeds) {
      newEnvironmentLevel = 4;
    } else if (environmentLevel === 4 && playerActionCount.useNet >= 5) {
      newEnvironmentLevel = 5;
    } else if (environmentLevel === 5 && playerStructures.bridge) {
      newEnvironmentLevel = 6;
    } else if (environmentLevel === 6 && playerActionCount.pickUpTrash >= 10) {
      newEnvironmentLevel = 7;
      setNextText(
        'The area has been completely cleared of trash and pollution. Nature is finally beginning to recover.',
      );
    } else {
      return;
    }
    setPlayerActionCount({});
    setEnvironmentLevel(newEnvironmentLevel);
  }, [playerStructures, environmentLevel, playerActionCount]);

  const value = useMemo(
    () => ({
      currentAction,
      environmentLevel,
      availableActions,
      nextText,
      setNextText,
      setCurrentAction,
    }),
    [currentAction, environmentLevel, availableActions, nextText],
  );

  return (
    <ActionContext.Provider value={value}>{children}</ActionContext.Provider>
  );
}

export { ActionContext, ActionProvider, actionKeySet };
