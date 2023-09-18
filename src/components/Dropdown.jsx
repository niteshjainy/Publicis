import React from "react";

const Dropdown = ({ options, handleDropdownSelect }) => {
  return (
    <div>
      <select
        className="border-2 hover:border-cyan-400 w-auto py-1 px-4 "
        onChange={handleDropdownSelect}
      >
        {options && options.length ? (
          options.map((e) => <option value={e.url}>{e.name}</option>)
        ) : (
          <option value="">Select</option>
        )}
      </select>
    </div>
  );
};

export default Dropdown;
