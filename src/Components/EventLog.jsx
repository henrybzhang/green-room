import './Styles/AllComponents.css';

const eventLog = [
  'some trash is picked up',
  'some trash is picked up',
  'some trash is fished from the river'
]

const EventLog = () => {
  return (
    <div className="log">
      {eventLog.map(eventText => <div>{eventText}</div>)}
    </div>
  )
}

export default EventLog;