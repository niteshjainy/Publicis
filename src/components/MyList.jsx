import React from "react";

const MyList = ({ options }) => {
  return (
    <ul className="m-4">
      {options && options.length ? (
        options.map((e) => (
          <li key={e} className="text-lg border-2 m-1 px-6 border-red-800">
            {e}
          </li>
        ))
      ) : (
        <li>NA</li>
      )}
    </ul>
  );
};

export default MyList;
