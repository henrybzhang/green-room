import { useContext, useState, useEffect } from 'react';
import '../styles/EventLog.css';
import { ActionContext } from '../providers/ActionProvider';

const MAX_EVENTS = 20;

const initialLog = [
  'The surrounding area is piled high with trash and is extremely polluted. Smog covers the land, making the visibility almost nil.',
];

function EventLog() {
  const { currentAction, nextText, setNextText } = useContext(ActionContext);
  const [eventLog, setEventLog] = useState(initialLog);

  useEffect(() => {
    if (!nextText) {
      return;
    }

    console.log(nextText);

    setEventLog([nextText, ...eventLog.slice(0, MAX_EVENTS)]);
    setNextText(null);
  }, [nextText]);

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
