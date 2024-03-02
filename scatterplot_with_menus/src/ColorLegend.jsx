const ColorLegend = ({colorScale, tickSpacing = 20, tickSize = 10}) => 
  colorScale.domain().map((domainValue, i) => (
    <g key={i} transform={`translate(0, ${i * tickSpacing})`}>
      <circle fill={colorScale(domainValue)} r={tickSize} />
      <text>{domainValue}</text>
    </g>
  ))

export default ColorLegend;