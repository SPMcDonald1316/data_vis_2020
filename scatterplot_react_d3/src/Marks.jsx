export const Marks = ({data, xScale, yScale, xValue, yValue, tooltipFormat}) =>
  data.map((d, index) => (
    <circle
      key={index}
      className="mark"
      cx={xScale(xValue(d))}
      cy={yScale(yValue(d))}
      r={10}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </circle>
  ));