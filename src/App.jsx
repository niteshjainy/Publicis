import { useEffect, useState } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";
import MyList from "./components/MyList";

function App() {
  const [pokiesData, setPokiesData] = useState([]);
  const [pokiPower, setPokiPower] = useState([]);
  const [cachedData, setCachedData] = useState({});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((e) => e.json())
      .then((v) => setPokiesData(v.results));
  }, []);

  const handleDropdownSelect = (e) => {
    const value = e.target.value;
    if (value in cachedData) {
      setPokiPower(cachedData[value]);
    } else
      fetch(value)
        .then((e) => e.json())
        .then((v) => {
          const temp = [];
          v.abilities.forEach((e) => {
            if (e && e.ability && e.ability.name) temp.push(e.ability.name);
          });
          setCachedData(Object.assign(cachedData, (cachedData[value] = temp)));
          setPokiPower(temp);
        });
  };

  return (
    <>
      <h1>Please choose the dropdown values</h1>
      <Dropdown
        options={pokiesData}
        handleDropdownSelect={handleDropdownSelect}
      />
      <MyList options={pokiPower} />
    </>
  );
}

export default App;
