import React , { useState } from 'react';


function Counter() {
//   const [count, setCount] = useState(() => {
//     console.log('useState callback');
//     return 0;
//   });

    const [state , setState] = useState({count: 0 , name: 'John'})
    const count = state.count;
    const name = state.name;
   
  const increment = () => setState(prevState => {
    return {...prevState , count : prevState.count + 1}
  });
  const decrement = () => setState(prevState => {
    return {...prevState , count : prevState.count - 1}
  });
  const reset = () => setState({count : 0})

  return (
    <div>
      <button onClick={increment}>+</button>
      <h1 >{count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter;