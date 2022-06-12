import { useContext, useEffect, useState } from 'react';
import ActionButton from './ActionButton';
import '../styles/ActionButtonGroup.css';
import { ActionContext } from '../providers/ActionProvider';

function ActionButtonGroup() {
  const { availableActions } = useContext(ActionContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const delayActionButton = setTimeout(() => {
      setIsVisible(true);
    }, 2500);
    return () => clearTimeout(delayActionButton);
  }, []);

  return (
    <div
      className="buttons-group"
      style={{
        transition: 'all 2s',
        visibility: !isVisible ? 'hidden' : 'visible',
        opacity: !isVisible ? '0' : '1',
      }}
    >
      {Object.entries(availableActions).map(([actionName, actionText]) => (
        <ActionButton
          actionName={actionName}
          actionText={actionText}
          key={actionName}
        />
      ))}
    </div>
  );
}

export default ActionButtonGroup;
