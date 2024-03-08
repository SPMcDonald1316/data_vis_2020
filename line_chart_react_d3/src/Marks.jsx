import { curveNatural, line } from "d3";
export const Marks = ({data, xScale, yScale, xValue, yValue, tooltipFormat, circleRadius}) => 
  <g className="marks">
    <path
      d={line()
        .x(d => xScale(xValue(d)))
        .y(d => yScale(yValue(d)))
        .curve(curveNatural)(data)
        } />
    {/* {data.map((d, index) => (
      // Add points to line
      // <circle
      //   key={index}
      //   cx={xScale(xValue(d))}
      //   cy={yScale(yValue(d))}
      //   r={circleRadius}
      // >
      //   <title>{tooltipFormat(xValue(d))}</title>
      // </circle>

  ))
} */}
</g>