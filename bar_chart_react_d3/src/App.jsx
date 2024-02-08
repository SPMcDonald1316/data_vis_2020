import { useEffect, useState } from 'react'
import { csv, scaleBand, scaleLinear, max } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';

const width = window.innerWidth;
const height = window.innerHeight;
const margin = { top: 20, right: 20, bottom: 20, left: 200};

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const row = d => {
      d.Population = +d['2020'];
      return d;
    }
    csv(csvUrl, row).then(data => {
      setData(data.slice(0, 10))
    });
  }, []);

  if(!data) {
    return <div>Loading...</div>
  }

  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.left - margin.right

  const yScale = scaleBand()
    .domain(data.map(d => d.Country))
    .range([0, innerHeight]);

  const xScale = scaleLinear()
    .domain([0, max(data, d => d.Population)])
    .range([0, innerWidth]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {xScale.ticks().map(tickValue => (
          <g transform={`translate(${xScale(tickValue)}, 0)`}>
            <line y2={innerHeight} stroke='black' />
            <text 
              style={{textAnchor: 'middle'}} 
              y={innerHeight + 3}
              dy='.71em'
            >
              {tickValue}
            </text>
          </g>
        ))}
        {yScale.domain().map(tickValue => (
          <text
            style={{textAnchor: 'end'}}
            dy='.32em'
            x={-3}
            y={yScale(tickValue) + yScale.bandwidth() / 2}
          >
            {tickValue}
          </text>
        ))}
        {data.map(d => (
          <rect 
            x={0} 
            y={yScale(d.Country)} 
            width={xScale(d.Population)} 
            height={yScale.bandwidth()}
          />))}
      </g>
    </svg>
  )
}

export default App
