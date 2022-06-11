import { useContext } from 'react';
import { ActionContext } from '../providers/ActionProvider';
import '../styles/ActionButton.css';

function ActionButton({ actionName, actionText }) {
  const { setCurrentAction } = useContext(ActionContext);

  return (
    <button
      type="button"
      className="buttons shrink-on-hover"
      onClick={() => setCurrentAction(actionName)}
    >
      {actionText}
    </button>
  );
}
export default ActionButton;
