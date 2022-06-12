import { useContext } from 'react';
import { InventoryContext } from '../providers/InventoryProvider';
import { ActionContext } from '../providers/ActionProvider';
import '../styles/Inventory.css';

function Inventory() {
  const { playerItems } = useContext(InventoryContext);
  const { environmentLevel } = useContext(ActionContext);

  return environmentLevel === 7 ? null : (
    <fieldset className="inventory-container">
      <legend>Collection</legend>
      {Object.entries(playerItems).map(([itemName, amount]) => (
        <div className="inventory-item" key={itemName}>
          <div>
            {itemName}
            :&nbsp;
          </div>
          <div className="item-count">{amount}</div>
        </div>
      ))}
    </fieldset>
  );
}

export default Inventory;
