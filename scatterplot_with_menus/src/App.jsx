import { scaleLinear, format, extent, scaleOrdinal } from "d3";
import useData from "./useData";
import AxisBottom from "./AxisBottom.jsx";
import AxisLeft from "./AxisLeft.jsx";
import Marks from "./Marks.jsx";
import { useState } from "react";
import ReactDropdown from "react-dropdown";
import "react-dropdown/style.css";
import ColorLegend from "./ColorLegend.jsx";

const width = window.innerWidth;
const height = window.innerHeight;
const margin = { top: 20, right: 200, bottom: 150, left: 110 };
const xAxisLabelOffset = 60;
const yAxisLabelOffset = 60;

const attributes = [
  {value: 'sepal_length', label: 'Sepal Length'},
  {value: 'sepal_width', label: 'Sepal Width'},
  {value: 'petal_length', label: 'Petal Length'},
  {value: 'petal_width', label: 'Petal Width'},
  {value: 'species', label: 'Species'}
];

const getLabel = value => {
  for(let i=0; i<attributes.length; i++) {
    if(attributes[i].value === value) {
      return attributes[i].label;
    }
  }
}

const App = () => {
  const data = useData();
  const [hoveredValue, setHoveredValue] = useState(null);

  const initialXAttribute = 'sepal_length';
  const [xAttribute, setXAttribute] = useState(initialXAttribute);
  const xValue = d => d[xAttribute];
  const xAxisLabel = getLabel(xAttribute);

  const initialYAttribute = 'sepal_width';
  const [yAttribute, setYAttribute] = useState(initialYAttribute);
  const yValue = d => d[yAttribute];
  const yAxisLabel = getLabel(yAttribute);

  const colorValue = d => d.species;
  const colorLegendLabel = 'Species'

  const circleRadius = 7;

  if (!data) return <div>Loading...</div>;

  const filteredData = data.filter(d => hoveredValue === colorValue(d));

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

  const colorScale = scaleOrdinal()
    .domain(data.map(colorValue))
    .range(['#e6842a', '#d36876', '#8e6c8a']);

  return (
    <>
      <div className="menus-container">
        <span className="dropdown-label">X</span>
        <ReactDropdown
          options={attributes}
          value={xAttribute}
          onChange={({value}) => setXAttribute(value)}
        />

        <span className="dropdown-label">Y</span>
        <ReactDropdown 
          options={attributes}
          value={yAttribute}
          onChange={({value}) => setYAttribute(value)}
        />
      </div>
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

          <g transform={`translate(${innerWidth + 60}, 60)`}>
            <text
              x={35}
              y={-25}
              className="axis-label"
              textAnchor="middle"
            >
              {colorLegendLabel}
            </text>
            <ColorLegend
              colorScale={colorScale}
              tickSpacing={22}
              tickSize={circleRadius}
              tickTextOffset={12}
              onHover={setHoveredValue}
            />
          </g>
          <g opacity={ hoveredValue ? 0.2 : 1}>
            <Marks
              data={data}
              xScale={xScale}
              yScale={yScale}
              colorScale={colorScale}
              xValue={xValue}
              yValue={yValue}
              colorValue={colorValue}
              tooltipFormat={xAxisTickFormat}
              circleRadius={circleRadius}
            />
          </g>
          <Marks
            data={filteredData}
            xScale={xScale}
            yScale={yScale}
            colorScale={colorScale}
            xValue={xValue}
            yValue={yValue}
            colorValue={colorValue}
            tooltipFormat={xAxisTickFormat}
            circleRadius={circleRadius}
          />
        </g>
      </svg>
    </>
  )
}

export default App;