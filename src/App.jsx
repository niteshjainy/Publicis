import PokeHome from "./Routes/PokeHome";
import PokeHomeWithAsyncAwait from "./Routes/PokeHomeWithAsyncAwait";
import PokeHomeWithSeprateHOC from "./Routes/PokeHomeWithSeprateHOC";
import TextDummyCode from "./TextDummyCode";

function App() {
  return (
    <div>
      {/* <PokeHome /> */}
      {/* <PokeHomeWithAsyncAwait /> */}
      <PokeHomeWithSeprateHOC />
      {/* <TextDummyCode /> */}
    </div>
  );
}

export default App;
