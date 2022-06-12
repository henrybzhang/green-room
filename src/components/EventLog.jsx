import { useContext, useState, useEffect } from 'react';
import '../styles/EventLog.css';
import { ActionContext, actionKeySet } from '../providers/ActionProvider';

const MAX_EVENTS = 20;

function EventLog() {
  const { currentAction } = useContext(ActionContext);
  const [eventLog, setEventLog] = useState([]);

  useEffect(() => {
    if (!currentAction) {
      return;
    }

    try {
      if (!actionKeySet.has(currentAction)) {
        throw Error(`Unknown action: ${currentAction}`);
      }

      const eventLogToKeep = eventLog.slice(0, MAX_EVENTS);

      switch (currentAction) {
        case 'pickUpTrash':
          setEventLog([
            'Some trash from the ground is picked up',
            ...eventLogToKeep,
          ]);
          break;
        case 'buildRecycler':
          setEventLog(['The recycler is now operational', ...eventLogToKeep]);
          break;
        case 'useRecycler':
          setEventLog([
            'Some trash is recycled into usable items',
            ...eventLogToKeep,
          ]);
          break;
        case 'buildAirFilterv':
          setEventLog([
            'An air filter has been constructed',
            ...eventLogToKeep,
          ]);
          break;
        case 'buildNet':
          setEventLog(['A net has been built', ...eventLogToKeep]);
          break;
        case 'useNet':
          setEventLog([
            'Some litter is filtered from the river',
            ...eventLogToKeep,
          ]);
          break;
        case 'buildBridge':
          setEventLog(['The river can now be crossed', ...eventLogToKeep]);
          break;
        default:
          throw Error(`Undeveloped action: ${currentAction}`);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }, [currentAction]);

  return (
    <div className="log">
      {eventLog.map((eventText, index) => (
        <div
          style={{
            opacity: (MAX_EVENTS - index) / MAX_EVENTS,
          }}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        >
          {eventText}
        </div>
      ))}
    </div>
  );
}

export default EventLog;
