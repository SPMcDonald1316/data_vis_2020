import { useData } from "./useData"

const width = window.innerWidth;
const height = window.innerHeight;

const App = () => {
  const data = useData();

  if(!data) return <pre>Loading...</pre>

  return (
    <svg width={width} height={height}></svg>
  )
}

export default App
