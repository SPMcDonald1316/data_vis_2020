import './App.css';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;

function App() {
  return (
    <svg width={width} height={height}>
      <circle
        cx={centerX}
        cy={centerY}
        r="245"
        fill="yellow"
        stroke="black"
        stroke-width={strokeWidth}
      ></circle>
    </svg>
  );
}

export default App;
