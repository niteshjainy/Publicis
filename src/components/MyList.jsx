import React from "react";

const MyList = ({ options }) => {
  return (
    <ul>
      {options && options.length ? (
        options.map((e) => <li>{e}</li>)
      ) : (
        <li>NA</li>
      )}
    </ul>
  );
};

export default MyList;
