import './App.css'

const App = () => (
  <div>
    <label htmlFor="pet-select">Choose a pet: </label>

    <select id="pet-select">
      <option value="">--Please choose an option--</option>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
    </select>
  </div>
)

export default App
