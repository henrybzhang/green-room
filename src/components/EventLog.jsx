import { useContext, useState, useEffect } from 'react';
import '../styles/EventLog.css';
import { ActionContext } from '../providers/ActionProvider';

const initialLog = [
  'Welcome to a recovering world',
  'The surrounding area is piled high with trash and is extremely polluted. Smog covers the land, making the visibility almost nil.',
];

function EventLog() {
  const { nextText, setNextText, environmentLevel } = useContext(ActionContext);
  const [eventLog, setEventLog] = useState(initialLog);

  useEffect(() => {
    if (!nextText) {
      return;
    }

    let eventLogToKeep = eventLog;
    if (environmentLevel === 7) {
      eventLogToKeep = [];
    }

    setEventLog([nextText, ...eventLogToKeep]);
    setNextText(null);
  }, [nextText]);

  return (
    <div className="log">
      {eventLog.map((eventText, index) => (
        <div
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
