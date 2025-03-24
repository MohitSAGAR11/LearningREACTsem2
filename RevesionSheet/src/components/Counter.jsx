import React ,{useState , useEffect} from 'react';

function Counter() {
    const [count , setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(0);
          }, 5000);
          
        return () => clearTimeout(timer);
    },[count]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter;