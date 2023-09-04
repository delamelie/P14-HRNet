export default function Dropdown({
  label,
  name,
  id,
  ariaLabelledby,
  fieldName,
  autoComplete,
  options,
  value,
  onChange,
  error,
}) {
  return (
    <div className="sm:col-span-2">
      <label htmlFor={label} className="block text-sm leading-6">
        {fieldName}
      </label>

      <select
        name={name}
        id={id}
        autoComplete={autoComplete}
        aria-labelledby={ariaLabelledby}
        aria-required="true"
        required
        value={value}
        onChange={onChange}
        className="block w-full rounded h-8 py-1 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        <option value="">Choose an option</option>

        {options.map((option, index) => (
          <option key={index} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <p>Please provide a value</p>}
    </div>
  );
}
