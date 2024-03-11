import { curveNatural, line } from "d3";

const Marks = ({data, xScale, yScale, xValue, yValue, tooltipFormat, circleRadius}) => 
  <g className="marks">
    {data.map((d, index) => (
      <circle
        key={index}
        cx={xScale(xValue(d))}
        cy={yScale(yValue(d))}
        r={circleRadius}
      >
        <title>{tooltipFormat(xValue(d))}</title>
      </circle>
    ))}
  </g>

export default Marks;