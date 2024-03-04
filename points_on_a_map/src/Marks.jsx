import { geoNaturalEarth1, geoPath, geoGraticule } from "d3";

const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();

const Marks = ({ worldAtlas: {land, interiors }, cities, sizeScale, sizeValue}) => (
  <g className="marks">
    <path className="sphere" d={path({ type: 'Sphere' })}></path>
    <path className="graticules" d={path(graticule())}></path>
    {land.features.map(feature => (
      <path className="land" key={feature.id} d={path(feature)}></path>
    ))}
    <path className="interior" d={path(interiors)}></path>
    { cities.map((d, i) => {
      const [x, y] = projection([d.lng, d.lat]);
      return <circle key={i} cx={x} cy={y} r={sizeScale(sizeValue(d))} />
    })}
  </g>
)

export default Marks;