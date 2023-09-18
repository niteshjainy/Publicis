import React from "react";

const Dropdown = ({ options, handleDropdownSelect }) => {
  return (
    <div>
      <select
        className="border-2 hover:border-cyan-400 w-auto py-1 px-4 "
        onChange={handleDropdownSelect}
      >
        <option value="">Select</option>
        {options && options.length
          ? options.map((e) => (
              <option key={e.url} value={e.url}>
                {e.name}
              </option>
            ))
          : null}
      </select>
    </div>
  );
};

export default Dropdown;
