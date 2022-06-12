import { useContext, useState, useEffect } from 'react';
import '../styles/EventLog.css';
import { ActionContext, actionKeySet } from '../providers/ActionProvider';

const MAX_EVENTS = 20;

const initialLog = [
  'The surrounding area is piled high with trash and is extremely polluted. Smog covers the land, making the visibility almost nil.',
];

function EventLog() {
  const { currentAction } = useContext(ActionContext);
  const [eventLog, setEventLog] = useState(initialLog);

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
            'The surrounding area has been slightly cleared of trash',
            ...eventLogToKeep,
          ]);
          break;
        case 'buildRecycler':
          setEventLog(['The recycler is now operational', ...eventLogToKeep]);
          break;
        case 'useRecycler':
          setEventLog([
            'Some usable items have been recycled from trash',
            ...eventLogToKeep,
          ]);
          break;
        case 'buildAirFilter':
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
            'Some litter has been filtered from the river',
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
