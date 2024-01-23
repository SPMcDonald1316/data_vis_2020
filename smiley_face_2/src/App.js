import './App.css';
import { BackgroundCircle } from './BackgroundCircle';
import { Eyes } from './Eyes';
import { Mouth } from './Mouth';
import { FaceContainer } from './FaceContainer';

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

 const App = () => (
  <FaceContainer
    width={width}
    height={height}
    centerX={centerX}
    centerY={centerY}
  >
    <BackgroundCircle 
      radius={centerY - strokeWidth / 2} 
      strokeWidth={strokeWidth}
    ></BackgroundCircle>
    <Eyes 
      eyeOffsetX={eyeOffsetX} 
      eyeOffsetY={eyeOffsetY} 
      eyeRadius={eyeRadius}
    ></Eyes>
    <Mouth 
      mouthRadius={mouthRadius} 
      mouthWidth={mouthWidth}
    ></Mouth>
  </FaceContainer>
);

export default App;
