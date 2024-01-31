import { useState, useEffect } from 'react';
import './App.css';
import {csv} from 'd3';
import { message } from './Message';

const csvUrl = "https://gist.githubusercontent.com/SPMcDonald1316/c44c8efd90878b3c4032c3b642669e19/raw/cssNamedColors.csv";


const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  return (
    <pre>{data ? message(data) : 'loading'}</pre>
  );
};

export default App
