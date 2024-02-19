import { geoEqualEarth, geoPath } from "d3";

const projection = geoEqualEarth();
const path = geoPath(projection);

export const Marks = ({ data }) => (
  <g className="marks">
    <path className="sphere" d={path({ type: 'Sphere' })}></path>
    {data.features.map(feature => (
        <path className="feature" key={feature.id} d={path(feature)}></path>
    ))}
  </g>
)