import {useContext} from 'react';
import {ActionContext} from '../Providers/ActionProvider';
import './Styles/AllComponents.css';


const ActionButton = ({actionName, actionText}) => {
  const {setCurrentAction} = useContext(ActionContext)
  
  return (
    <button className="buttons" onClick={() => setCurrentAction(actionName)}>
      {actionText}
    </button>
  )
};
export default ActionButton;