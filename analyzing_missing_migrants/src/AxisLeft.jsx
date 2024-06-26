const AxisLeft = ({yScale, innerWidth, tickOffset}) => 
  yScale.ticks().map(tickValue => (
    <g key={tickValue} className="tick" transform={`translate(0, ${yScale(tickValue)})`}>
      <line x2={innerWidth} />
      <text
        style={{textAnchor: 'end'}}
        dy=".32em"
        x={-tickOffset}
      >
        {tickValue}
      </text>
    </g>
  ));

  export default AxisLeft;