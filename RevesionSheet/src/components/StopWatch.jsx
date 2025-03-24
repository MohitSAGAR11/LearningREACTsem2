import React , {useState , useEffect} from 'react';
function StopWatch() {
    const [time , setTime] = useState(0);
    const [isActive , setIsActive] = useState(false);

    //time holds seconds
    //setTime updates the time
    //isActive holds boolean value to check if the stopwatch is active or not
    //setIsActive updates the isActive value

    useEffect(() => {
        let interval = null;
        if(isActive){
            interval = setInterval(() => {
                setTime((time) => time + 1);
            },1000)
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive]);

    const handleStart = () => {
        setIsActive(true);
    }

    const handleStop = () => {
        setIsActive(false);
    }
    
    const handleReset = () => {
        setTime(0);
        setIsActive(false);
    }

    return (
        <div>
            <h1>{time}</h1>
            <br/>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default StopWatch;