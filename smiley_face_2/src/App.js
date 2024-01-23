import './App.css';
import { arc } from 'd3';
import { BackgroundCircle } from './BackgroundCircle';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 40;
const mouthWidth = 20;
const mouthRadius = 140;

const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle(Math.PI * 3 / 2);

const Eyes = ({eyeOffsetX, eyeOffsetY, eyeRadius}) => (
  <>
    <circle
      cx={-eyeOffsetX}
      cy={-eyeOffsetY}
      r={eyeRadius}
    />
    <circle
      cx={eyeOffsetX}
      cy={-eyeOffsetY}
      r={eyeRadius}
    />
  </>
)


function App() {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        <BackgroundCircle 
          radius={centerY - strokeWidth / 2} 
          strokeWidth={strokeWidth}
        ></BackgroundCircle>
        <Eyes 
          eyeOffsetX={eyeOffsetX} 
          eyeOffsetY={eyeOffsetY} 
          eyeRadius={eyeRadius}
        ></Eyes>
        <path d={mouthArc()} />
      </g>
    </svg>
  );
}

export default App;
