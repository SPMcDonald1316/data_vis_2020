import { geoNaturalEarth1, geoPath, geoGraticule } from "d3";

const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();

const Marks = ({ worldAtlas: {land, interiors }, cities: { lat, lng}}) => (
  <g className="marks">
    <path className="sphere" d={path({ type: 'Sphere' })}></path>
    <path className="graticules" d={path(graticule())}></path>
    {land.features.map(feature => (
      <path className="land" key={feature.id} d={path(feature)}></path>
    ))}
    <path className="interior" d={path(interiors)}></path>
  </g>
)

export default Marks;