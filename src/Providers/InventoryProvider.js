import React, { createContext, useState } from "react";

const InventoryContext = createContext();

const InventoryProvider = ({ children }) => {
  const [playerItems, setPlayerItems] = useState({
    plastic: 78,
    wood: 13,
  });

  const [playerStructures, setPlayerStructures] = useState({})

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
};

export { InventoryContext, InventoryProvider };
