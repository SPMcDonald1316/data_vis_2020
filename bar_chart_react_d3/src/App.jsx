import { useEffect, useState } from 'react'
import { csv, scaleBand, scaleLinear, max } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';
const width = window.innerWidth;
const height = window.innerHeight;

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const row = d => {
      d.Population = +d['2020'];
      return d;
    }
    csv(csvUrl, row).then(setData);
  }, []);

  if(!data) {
    return <div>Loading...</div>
  }

  const yScale = scaleBand()
    .domain(data.map(d => d.Country))
    .range([0, height]);

  const xScale = scaleLinear()
    .domain([0, max(data, d => d.Population)])
    .range([0, width]);

  return (
    <svg width={width} height={height}>
      {data.map(d => (
        <rect 
          x={0} 
          y={yScale} 
          width={xScale(d.Population)} 
          height={yScale.bandwidth()}
        />))}
    </svg>
  )
}

export default App
