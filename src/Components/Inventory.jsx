import {useContext} from 'react';
import {InventoryContext} from '../Providers/InventoryProvider';
import './Styles/AllComponents.css';

const Inventory = () => {
  const {playerItems} = useContext(InventoryContext);
  
  return (
    <div className="invent">
      {Object.entries(playerItems).map(([itemName, amount]) => <div>{itemName}: {amount}</div>)}
    </div>
  )
}

export default Inventory;