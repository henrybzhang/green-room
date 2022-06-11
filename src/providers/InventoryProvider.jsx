import React, { createContext, useState } from 'react';

const InventoryContext = createContext();

function InventoryProvider({ children }) {
  const [playerItems, setPlayerItems] = useState({});

  const [playerStructures, setPlayerStructures] = useState({});

  const addItem = (itemName, amount) => {
    if (itemName in playerItems) {
      setPlayerItems({
        ...playerItems,
        [itemName]: playerItems[itemName] + amount,
      });
    } else {
      setPlayerItems({
        ...playerItems,
        [itemName]: amount,
      });
    }
  };

  return (
    <InventoryContext.Provider
      value={{
        playerItems,
        playerStructures,
        setPlayerStructures,
        addItem,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
}

export { InventoryContext, InventoryProvider };
