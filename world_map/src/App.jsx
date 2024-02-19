import { useData } from "./useData";
import { Marks } from "./Marks";

const width = window.innerWidth;
const height = window.innerHeight;

const App = () => {
  const data = useData();
  if (!data) return <pre>Loading...</pre>;

  return (
    <svg width={width} height={height}>
      <Marks data={data} />
    </svg>
  )
}

export default App
