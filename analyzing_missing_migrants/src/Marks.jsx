import { curveNatural, line } from "d3";

const Marks = ({data, xScale, yScale, xValue, yValue, tooltipFormat, circleRadius}) => 
  <g className="marks">
    <path
      d={line()
        .x(d => xScale(xValue(d)))
        .y(d => yScale(yValue(d)))
        .curve(curveNatural)(data)
      } />
  </g>

export default Marks;