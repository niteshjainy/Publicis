import React, { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import MyList from "../components/MyList";
import Connector from "../utills/HOC/Connector";

const PokeHomeWithSeprateHOC = ({ data }) => {
  console.log(data);
  const [pokiPower, setPokiPower] = useState([]);
  const [cachedData, setCachedData] = useState({});

  const getPokePower = async (value) => {
    try {
      const res = await fetch(value);
      const result = await res.json();
      if (res.ok) {
        const temp = [];
        result.abilities.forEach((e) => {
          if (e && e.ability && e.ability.name) temp.push(e.ability.name);
        });
        setCachedData(Object.assign(cachedData, (cachedData[value] = temp)));
        setPokiPower(temp);
      } else throw new Error(res.status);
    } catch (err) {
      alert(err);
      setPokiPower([]);
    }
  };

  const handleDropdownSelect = (e) => {
    const value = e.target.value;
    if (value in cachedData) {
      setPokiPower(cachedData[value]);
    } else {
      getPokePower(value);
    }
  };

  return (
    <div className="flex items-center justify-center border-4 flex-col m-2">
      <h1 className="p-6">Please choose the dropdown values</h1>
      <Dropdown options={data} handleDropdownSelect={handleDropdownSelect} />
      <hr className="border-1 border-gray-800 w-full m-2" />
      <MyList options={pokiPower} />
    </div>
  );
};

export default Connector(
  PokeHomeWithSeprateHOC,
  "https://pokeapi.co/api/v2/pokemon/"
);
