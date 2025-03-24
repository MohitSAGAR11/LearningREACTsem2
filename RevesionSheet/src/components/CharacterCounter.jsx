import React, { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);

  const handleTextChange = (e) => {
    
    const newText = e.target.value;
    const newCount = newText.length;
    setText(newText);
    setCharCount(newCount);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type something"
        value={text}
        onChange={handleTextChange}
      />
      <p>Character count: {charCount}</p>
    </div>
  );
}

export default CharacterCounter;