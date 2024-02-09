export const AxisLeft = ({yScale, innerWidth}) =>
  yScale.ticks().map(tickValue => (
    <g key={tickValue} className="tick" transform={`translate(0, ${yScale(tickValue)})`}>
      <line x2={innerWidth}/>
      <text
        style={{textAnchor: 'end'}}
        dy='.32em'
        x={-3}
      >
        {tickValue}
      </text>
    </g>
  ))