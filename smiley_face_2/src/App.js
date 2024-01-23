import './App.css';
import { Face } from './Face';

const width = 960;
const height = 500;

 const App = () => (
  <Face
    width={width}
    height={height}
    centerX={width / 2}
    centerY={height / 2}
    strokeWidth={20}
    eyeOffsetX={90}
    eyeOffsetY={100}
    eyeRadius={40}
    mouthWidth={20}
    mouthRadius={140}
  ></Face>
);

export default App;
