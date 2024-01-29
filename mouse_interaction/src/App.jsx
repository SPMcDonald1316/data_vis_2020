import './App.css'
import { useState } from 'react';

const width = 960;
const height = 500;
const circleRadius = 30;
const initialMousePostion = { x: width / 2, y: height / 2};


const App = () => {
  const [mousePosition, setMousePosition] = useState(initialMousePostion);
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({x: clientX, y: clientY});
  };
  return (
    <svg width={width} height={height} onMouseMove={handleMouseMove}>
      <circle
        cx={mousePosition.x}
        cy={mousePosition.y}
        r={circleRadius}
      ></circle>
    </svg>
)};

export default App
