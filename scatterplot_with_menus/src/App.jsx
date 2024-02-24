import { scaleLinear, format, extent } from "d3";
import useData from "./useData";
import AxisBottom from "./AxisBottom.jsx";
import AxisLeft from "./AxisLeft.jsx";
import Marks from "./Marks.jsx";

const width = window.innerWidth;
const height = window.innerHeight;
const margin = { top: 20, right: 30, bottom: 65, left: 90 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 40;

const xValue = d => d.sepal_length;
const xAxisLabel = 'Sepal Length';

const yValue = d => d.sepal_width;
const yAxisLabel = 'Sepal Width';

const App = () => {
  const data = useData();

  if (!data) return <div>Loading...</div>;

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const siFormat = format('.2s');
  const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B');

  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

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
          tickOffset={7}
        />
        <text
          className="axis-label"
          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset}, ${innerHeight / 2}) rotate(-90)`}
        >
          {yAxisLabel}
        </text>

        <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={7}/>

        <text
          className="axis-label"
          x={innerWidth / 2}
          textAnchor="middle"
          y={innerHeight + xAxisLabelOffset}
        >
          {xAxisLabel}
        </text>

        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          tooltipFormat={xAxisTickFormat}
          circleRadius={7}
        />
      </g>
    </svg>
  )
}

export default App;