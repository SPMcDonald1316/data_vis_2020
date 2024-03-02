const Marks = ({ data, xScale, yScale, colorScale, xValue, yValue, colorValue, tooltipFormat, circleRadius}) =>
  data.map((d, index) => (
    <circle
      key={index}
      className="mark"
      cx={xScale(xValue(d))}
      cy={yScale(yValue(d))}
      fill={colorScale(colorValue(d))}
      r={circleRadius}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </circle>
  ));

export default Marks