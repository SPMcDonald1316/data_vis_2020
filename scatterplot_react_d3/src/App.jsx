import { scaleLinear, format, extent } from 'd3';
import { useData } from './useData';
import { AxisBottom } from './AxisBottom.jsx';
import { AxisLeft } from './AxisLeft.jsx';
import { Marks } from './Marks.jsx';

// Variables
const width = window.innerWidth;
const height = window.innerHeight;
const margin = { top: 20, right: 30, bottom: 65, left: 220};
const xAxisLabelOffset = 50;

// Accessor Functions
const xValue = d => d.sepal_length;
const yValue = d => d.sepal_width;

const App = () => {
  const data = useData();

  if (!data) return <div>Loading...</div>;

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const siFormat = format('.2s');
  const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B');

  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth]);

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0, innerHeight]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom 
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
        />

        <AxisLeft yScale={yScale} innerWidth={innerWidth}/>

        <text
          className='axis-label'
          x={innerWidth / 2}
          textAnchor='middle'
          y={innerHeight + xAxisLabelOffset}
        >
          Population
        </text>

        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          tooltipFormat={xAxisTickFormat} 
        />
      </g>
    </svg>
  )
}

export default App