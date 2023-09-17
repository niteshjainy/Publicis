import React from "react";

const Dropdown = ({ options, handleDropdownSelect }) => {
  return (
    <div>
      <select className="MyDropDown" onChange={handleDropdownSelect}>
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
