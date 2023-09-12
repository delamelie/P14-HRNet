export default function Input({
  inputName,
  field,
  type,
  value,
  name,
  autoComplete,
  error,
  onChange,
  forwardedRef,
}) {
  return (
    <>
      <label htmlFor={inputName} className="block text-sm leading-6">
        {field}
      </label>
      <input
        type={type}
        name={inputName}
        id={inputName}
        value={value}
        onChange={onChange}
        aria-labelledby={inputName}
        required
        aria-required="true"
        placeholder={name ? `Enter ${name} here` : ""}
        autoComplete={autoComplete}
        className="indent-1 block w-full rounded py-1 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-cyan-600 sm:text-sm sm:leading-6"
        ref={forwardedRef}
      />
      {error && <p>Please provide a value</p>}
    </>
  );
}
