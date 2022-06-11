import { useContext, useState, useEffect } from 'react';
import '../styles/EventLog.css';
import { ActionContext } from '../providers/ActionProvider';

function EventLog() {
  const { currentAction } = useContext(ActionContext);
  const [eventLog, setEventLog] = useState([]);

  useEffect(() => {
    if (!currentAction) {
      return;
    }

    switch (currentAction) {
      case 'pickUpTrash':
        setEventLog(['Some trash from the ground is picked up', ...eventLog]);
        break;
      case 'filterRiver':
        setEventLog(['Some litter is filtered from the river', ...eventLog]);
        break;
      case 'fixRecycler':
        setEventLog(['The recycler is now operational', ...eventLog]);
        break;
      case 'useRecycler':
        setEventLog(['Some trash is recycled into usable items', ...eventLog]);
        break;
      default:
        break;
    }
  }, [currentAction]);

  return (
    <div className="log">
      {eventLog.map((eventText) => (
        <div>{eventText}</div>
      ))}
    </div>
  );
}

export default EventLog;
