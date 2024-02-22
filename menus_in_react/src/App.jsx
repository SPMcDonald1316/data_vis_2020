import './App.css';

const Dropdown = ({options, id}) => (
  <select id={id}>
      <option value="">--Please choose an option--</option>
      { options.map(({value, label}, index) => (
        <option key={index} value={value}>{label}</option>
      ))}
    </select>
);

const options = [
  {value: 'dog', label: 'Dog'},
  {value: 'cat', label: 'Cat'},
  {value: 'hamster', label: 'Hamster'},
  {value: 'parrot', label: 'Parrot'},
  {value: 'spider', label: 'Spider'},
  {value: 'goldfish', label: 'Goldfish'}
];

const App = () => (
  <div>
    <label htmlFor="pet-select">Choose a pet: </label>

    <Dropdown options={options} id="pet-select" />
  </div>
);

export default App
