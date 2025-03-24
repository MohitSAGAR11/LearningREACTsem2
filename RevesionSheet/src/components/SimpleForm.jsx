import React, { useState } from "react";

function SimpleForm() {
  const [inputName, setInputName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

//   const handleInputChange = (e) => {
//     setInputName(e.target.value);
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(inputName);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={inputName} // Controlled input: value comes from state
          onChange={(e) => setInputName(e.target.value)} // Updates state on each keystroke
        />
        <button type="submit">Submit</button>
      </form>

      <p>Submitted: {submittedName}</p>
    </div>
  );
}

export default SimpleForm;
