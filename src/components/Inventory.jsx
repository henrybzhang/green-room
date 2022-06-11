import { useContext } from 'react';
import { InventoryContext } from '../providers/InventoryProvider';
import '../styles/Inventory.css';

function Inventory() {
  const { playerItems } = useContext(InventoryContext);

  return (
    <fieldset className="invent">
      <legend>collection</legend>
      {Object.entries(playerItems).map(([itemName, amount]) => (
        <div>
          {itemName}
          :
          {amount}
        </div>
      ))}
    </fieldset>
  );
}

export default Inventory;
