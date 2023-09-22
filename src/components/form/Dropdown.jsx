export default function Dropdown({
  dropdownName,
  name,
  label,
  options,
  register,
  errors,
  registerOptions,
}) {
  return (
    <div className="sm:col-span-2">
      <label htmlFor={dropdownName} className="block text-sm leading-6">
        {label}
      </label>

      <select
        name={dropdownName}
        id={dropdownName}
        aria-labelledby={dropdownName}
        aria-required="true"
        className="block w-full rounded h-8 py-1 ring-1 ring-gray-300 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
        {...register(name, registerOptions)}
      >
        <option value="">Choose an option</option>
        {options.map((option, index) => (
          <option key={index} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      <small className="text-danger text-red-500">
        {errors?.[name] && errors[name].message}
      </small>
    </div>
  );
}
