import { useContext } from 'react';
import { InventoryContext } from '../providers/InventoryProvider';
import '../styles/Inventory.css';

function Inventory() {
  const { playerItems } = useContext(InventoryContext);

  return (
    <div className="invent">
      {Object.entries(playerItems).map(([itemName, amount]) => (
        <div>
          {itemName}
          :
          {amount}
        </div>
      ))}
    </div>
  );
}

export default Inventory;
