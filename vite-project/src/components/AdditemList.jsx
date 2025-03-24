import React, { useState } from 'react';

function AddItemList() {
  
  const [items, setItems] = useState([]);
  // State to manage the current input.
  const [input, setInput] = useState('');

  const addItem = () => {
    // Only add non-empty strings.
    if (input.trim() !== '') {
      setItems([...items, input]);
      setInput('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter an item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddItemList;
