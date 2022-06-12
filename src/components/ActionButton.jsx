import { useContext, useState } from 'react';
import { ActionContext } from '../providers/ActionProvider';
import '../styles/ActionButton.css';

function ActionButton({ actionName, actionText }) {
  const { setCurrentAction } = useContext(ActionContext);
  const [isLoading, setIsLoading] = useState(false);

  const onClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <button
      type="button"
      className={`buttons ${isLoading ? 'disabled' : 'shrink-on-hover'}`}
      onClick={() => {
        onClick();
        setCurrentAction(actionName);
      }}
      disabled={isLoading}
    >
      {actionText}
    </button>
  );
}
export default ActionButton;
