import { useContext } from 'react';
import { InventoryContext } from '../providers/InventoryProvider';
import '../styles/Inventory.css';

function Inventory() {
  const { playerItems } = useContext(InventoryContext);

  return (
    <fieldset className="invent">
      <legend>Collection</legend>
      {Object.entries(playerItems).map(([itemName, amount]) => (
        <div className="invent-items">
          <div>
            {itemName}
            :&nbsp;
          </div>
          <div className="invent-item-two">{amount}</div>
        </div>
      ))}
    </fieldset>
  );
}

export default Inventory;
