import React, { createContext, useState, useEffect, useContext } from 'react';
import {InventoryContext} from './InventoryProvider';

const ActionContext = createContext();

const initialActions = {
  'pickUpTrash': 'pick up trash',
  'filterRiver': 'Filter out trash from river',
}

const buildActions = {
  'recycler': 'Fix recycler',
  'net': 'build net',
  'waterFilter': 'build waterFilter',
  'airFilter': 'build airFilter',
  // 'workshop': 'build workshop',
  // 'solarPanel': 'build solar panels',
  // 'windmill': 'build windmill',
  // 'automaticTrashPicker': 'build automatic trash picker',
  // 'automaticTrashFilter': 'build automatic trash filter',
  // 'automaticWaterFilter': 'build automatic water filter',
  // 'automaticAirFilter': 'build automatic air filter',
  'bridge': 'build bridge',
}

const ActionProvider = ({children}) => {

  const {addItem} = useContext(InventoryContext);
  const [currentAction, setCurrentAction] = useState(null);
  const [availableActions, setAvailableActions] = useState(initialActions);

  useEffect(() => {
    if (!currentAction) {
      return;
    }

    switch(currentAction) {
      case 'pickUpTrash':
        addItem('trash', 1)
        break;
      case 'filterRiver': 
        addItem('wood', 1)
        break;
      default:
        throw Error(`Unknown action: ${currentAction}`)
    }
    setCurrentAction(null);
    
  }, [currentAction]);


  return (<ActionContext.Provider
            value={{
              currentAction,
              setCurrentAction,
              availableActions
            }}>
    {children}
  </ActionContext.Provider>)
};

export { ActionContext, ActionProvider };
