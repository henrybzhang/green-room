import ActionButton from './ActionButton';
import '../styles/ActionButtonGroup.css';

function ActionButtonGroup({ actionMap }) {
  return (
    <div className="buttons-group">
      {Object.entries(actionMap).map(([actionName, actionText]) => (
        <ActionButton actionName={actionName} actionText={actionText} />
      ))}
    </div>
  );
}

export default ActionButtonGroup;
