import { useState } from 'react';
import './App.css';
import Dropdown from './Dropdown';

const options = [
  {value: 'dog', label: 'Dog'},
  {value: 'cat', label: 'Cat'},
  {value: 'hamster', label: 'Hamster'},
  {value: 'parrot', label: 'Parrot'},
  {value: 'spider', label: 'Spider'},
  {value: 'goldfish', label: 'Goldfish'}
];

const initialValue = 'hamster'

const App = () => {
  const [selectedValue, setSelectedValue] = useState(initialValue);
  return (
  <div>
    <label htmlFor="pet-select">Choose a pet: </label>

    <Dropdown 
      options={options} 
      id="pet-select" 
      selectedValue={selectedValue}
      onSelectedValueChange={setSelectedValue} 
    />
  </div>
)};

export default App
