import React , {useState , useEffect} from 'react';

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        },1000);

        return () => clearInterval(interval);
    },[]); // empty dependency array means that this effect will only run once

  return (
    <div>
      <p>Time: {time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;