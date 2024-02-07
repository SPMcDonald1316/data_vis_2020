import { useState, useEffect } from 'react';
import { csv, arc, pie } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/acd2b8cecfe51c520622fbaf407ee88b8796bfc6/cssNamedColors.csv';
const width = window.innerWidth;
const height = window.innerHeight;
const centerX = width / 2;
const centerY = height / 2;

const pieArc = arc()
  .innerRadius(0)
  .outerRadius(width);

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  if(!data) {
    return <pre>Loading...</pre>;
  }

  const colorPie = pie().value(1)
  
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        {colorPie(data).map(d => (
            <path fill={d.data['RGB hex value']} d={pieArc(d)} />
          ))
        }
      </g>
    </svg>
  )
}

export default App

// Calculating arcs manually
/* { data.map( (d, i) => (
  <path 
    fill={d['RGB hex value']} 
    d={pieArc({
      startAngle: (i / data.length) * 2 * Math.PI,
      endAngle: ((i + 1) / data.length) * 2 * Math.PI
    })}
  />
))} */