import { useState } from 'react'
import './App.css'
import {csv, csvFormat} from 'd3';

const csvUrl = "https://gist.githubusercontent.com/SPMcDonald1316/c44c8efd90878b3c4032c3b642669e19/raw/cssNamedColors.csv";

const message = data => {
  let message = '';
  message += `${Math.round(csvFormat(data).length / 1024)} kB\n`;
  console.log('hello');
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
    <pre>Data is {data ? message(data) : 'loading'}</pre>
  );
};

export default App
