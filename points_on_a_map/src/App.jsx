import useWorldAtlas from "./useWorldAtlas.js";
import Marks from "./Marks.jsx";
import useCities from "./useCities.js";

const width = window.innerWidth;
const height = window.innerHeight;

const App = () => {
  const worldAtlas = useWorldAtlas();
  const cities = useCities();

  if (!worldAtlas || !cities) return <pre>Loading...</pre>;

  return (
    <svg width={width} height={height}>
      <Marks worldAtlas={worldAtlas} cities={cities} />
    </svg>
  )
}

export default App;