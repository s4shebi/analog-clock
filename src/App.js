import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return ()=> clearInterval(interval);
  }, []);

  const getRotation = (unit, value, max) => (360 / max) * (value % max) + unit;

  const secondsRotation = getRotation(90, time.getSeconds(), 60);
  const minutesRotation = getRotation(90, time.getMinutes(), 60);
  const hoursRotation = getRotation(90, time.getHours(), 12);


  return (
    <div className="App">
      <div className="clock">
        <div className="hand seconds1" style={{ transform: `rotate(${secondsRotation}deg)`}}></div>
        <div className="hand minutes" style={{ transform: `rotate(${minutesRotation}deg)`}}></div>
        <div className="hand hours" style={{ transform: `rotate(${hoursRotation}deg)`}}></div>
      </div>
    </div>
  );
}

export default App;
