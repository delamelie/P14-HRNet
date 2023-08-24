export default function Input({
  inputName,
  field,
  type,
  value,
  name,
  autoComplete,
}) {
  return (
    <div>
      <label
        htmlFor={inputName}
        className="block text-sm leading-6 text-gray-900"
      >
        {field}
      </label>
      <input
        type={type}
        name={inputName}
        id={inputName}
        value={value}
        aria-labelledby={inputName}
        aria-required="true"
        placeholder={name ? `Enter ${name} here` : ""}
        autoComplete={autoComplete}
        className="indent-1 block w-full rounded py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  );
}
