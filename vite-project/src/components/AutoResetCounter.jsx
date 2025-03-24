import React, { useState, useEffect } from 'react';

function AutoResetCounter() {
  // Create a state variable 'count' with initial value 0.
  const [count, setCount] = useState(0);

  // useEffect runs every time 'count' changes.
  useEffect(() => {
    // Set a timeout that resets count to 0 after 5 seconds (5000 milliseconds)
    const timer = setTimeout(() => {
      setCount(0);
    }, 5000);

    // Clean up the timeout if the component re-renders or unmounts
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      {/* When the button is clicked, increment the count */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default AutoResetCounter;
