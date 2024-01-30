import { useState } from 'react'
import './App.css'
import {csv, csvFormat} from 'd3';

const csvUrl = "https://gist.githubusercontent.com/SPMcDonald1316/c44c8efd90878b3c4032c3b642669e19/raw/cssNamedColors.csv";
const width = 960;
const height = 500;

const message = data => {
  let message = '';
  message += `${Math.round(csvFormat(data).length / 1024)} kB\n`;
  console.log(Math.round(csvFormat(data)));
  message += `${data.length} rows\n`;
  message += `${data.columns.length} columns\n`;
  return message;
}

const App = () => {
  const [data, setData] = useState(null);

  csv(csvUrl).then(data => {
    setData(data);
  });

  return (
    <div>Data is {data ? message(data) : 'loading'}</div>
  );
};

export default App
