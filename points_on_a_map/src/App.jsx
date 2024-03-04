import useWorldAtlas from "./useWorldAtlas.js";
import Marks from "./Marks.jsx";
import useCities from "./useCities.js";

const width = window.innerWidth;
const height = window.innerHeight;

const App = () => {
  const mapData = useWorldAtlas();
  const cityData = useCities();
  console.log(cityData);
  if (!mapData) return <pre>Loading...</pre>;

  return (
    <svg width={width} height={height}>
      <Marks data={mapData} />
    </svg>
  )
}

export default App;