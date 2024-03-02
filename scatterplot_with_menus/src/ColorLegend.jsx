const ColorLegend = ({colorScale}) => {
  return colorScale.domain().map(domainValue => {
    <g>
      <circle fill={colorScale(domainValue)} />
      <text>{domainValue}</text>
    </g>
  })
}

export default ColorLegend;