const Dropdown = ({options, id, selectedValue, onSelectedValueChange}) => (
  <select id={id} defaultValue={selectedValue} onChange={event => onSelectedValueChange(event.target.value)}>
    { options.map(({value, label}, index) => (
      <option key={index} value={value}>{label}</option>
    ))}
    </select>
);

export default Dropdown;