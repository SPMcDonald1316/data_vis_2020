import './App.css'

const width = 960;
const height = 500;
const circleX = width / 2;
const circleY = height / 2;
const circleRadius = 30;

const App = () => (
  <svg width={width} height={height}>
    <circle
      cx={circleX}
      cy={circleY}
      r={circleRadius}
    ></circle>
  </svg>
);

export default App
