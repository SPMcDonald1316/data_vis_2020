import useWorldAtlas from "./useWorldAtlas.js";
import Marks from "./Marks.jsx";
import useCities from "./useCities.js";
import { max, scaleSqrt } from "d3";

const width = window.innerWidth;
const height = window.innerHeight;

const App = () => {
  const worldAtlas = useWorldAtlas();
  const cities = useCities();

  if (!worldAtlas || !cities) return <pre>Loading...</pre>;

  const sizeValue = d => d.population;
  const maxRadius = 15;

  const sizeScale = scaleSqrt()
    .domain([0, max(cities, sizeValue)])
    .range([0, maxRadius]);

  return (
    <svg width={width} height={height}>
      <Marks 
        worldAtlas={worldAtlas} 
        cities={cities} 
        sizeValue={sizeValue} 
        sizeScale={sizeScale} 
      />
    </svg>
  )
}

export default App;