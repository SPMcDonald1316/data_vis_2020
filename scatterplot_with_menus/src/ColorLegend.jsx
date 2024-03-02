const ColorLegend = ({colorScale, tickSpacing = 20, tickSize = 10, tickTextOffset = 20, onHover}) => 
  colorScale.domain().map((domainValue, i) => (
    <g 
      key={i}
      className="tick" 
      transform={`translate(0, ${i * tickSpacing})`}
      onMouseEnter={() => { onHover(domainValue); }}
      onMouseOut={() => { onHover(null); }}
    >
      <circle fill={colorScale(domainValue)} r={tickSize} />
      <text x={tickTextOffset} dy=".32em">{domainValue}</text>
    </g>
  ))

export default ColorLegend;