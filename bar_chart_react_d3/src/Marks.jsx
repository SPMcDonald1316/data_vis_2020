export const Marks = ({data, xScale, yScale, xValue, yValue}) => 
  data.map(d => (
    <rect 
      key={yValue(d)}
      className="mark"
      x={0} 
      y={yScale(yValue(d))} 
      width={xScale(xValue(d))} 
      height={yScale.bandwidth()}
    />
  ));