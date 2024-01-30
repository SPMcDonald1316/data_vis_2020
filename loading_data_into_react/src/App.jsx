import { useState } from 'react'
import './App.css'
import {csv} from 'd3';

const csvUrl = "https://gist.githubusercontent.com/SPMcDonald1316/c44c8efd90878b3c4032c3b642669e19/raw/cssNamedColors.csv";
const width = 960;
const height = 500;

const App = () => {
  const [data, setData] = useState(null);

  csv(csvUrl).then(data => {
    setData(data);
    // let message = ''
    // message += `${Math.round(d3.csvFormat(data) / 1024)} kB\n`
    // message += `${data.length} rows\n`;
    // message += `${data.columns.length} columns\n`
  });

  return (
    <div>Data is {data ? 'loaded' : 'loading'}</div>
  );
};

export default App
