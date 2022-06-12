import { useContext } from 'react';
import ActionButton from './ActionButton';
import '../styles/ActionButtonGroup.css';
import { ActionContext } from '../providers/ActionProvider';

function ActionButtonGroup() {
  const { availableActions } = useContext(ActionContext);

  return (
    <div className="buttons-group">
      {Object.entries(availableActions).map(([actionName, actionText]) => (
        <ActionButton actionName={actionName} actionText={actionText} />
      ))}
    </div>
  );
}

export default ActionButtonGroup;
