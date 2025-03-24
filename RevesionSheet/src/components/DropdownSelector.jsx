import React, { useState } from "react";

function DropdownSelector() {
  const [selected, setSelected] = useState("Select");

  const handleSelectChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      <select value={selected} onChange={handleSelectChange}>
        <option value="">--Please Select--</option>

        {/* dropdown menu */}
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Cherry">Cherry</option>
      </select>

      <p>Selected: {selected}</p>
    </div>
  );
}

export default DropdownSelector;