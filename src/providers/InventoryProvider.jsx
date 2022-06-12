import React, { createContext, useState, useMemo } from 'react';

const InventoryContext = createContext();

function InventoryProvider({ children }) {
  const [playerItems, setPlayerItems] = useState({});
  const [playerStructures, setPlayerStructures] = useState({});

  const updateItems = (itemChanges) => {
    const updatedPlayerItems = { ...playerItems };
    Object.entries(itemChanges).forEach(([itemName, amount]) => {
      if (itemName in updatedPlayerItems) {
        updatedPlayerItems[itemName] += amount;
      } else {
        updatedPlayerItems[itemName] = amount;
      }
    });
    setPlayerItems(updatedPlayerItems);
  };

  const value = useMemo(
    () => ({
      playerItems,
      playerStructures,
      setPlayerStructures,
      updateItems,
    }),
    [playerItems, playerStructures],
  );

  return (
    <InventoryContext.Provider value={value}>
      {children}
    </InventoryContext.Provider>
  );
}

export { InventoryContext, InventoryProvider };
