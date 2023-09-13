export default function Input({
  inputName,
  label,
  type,
  autoComplete,
  forwardedRef,
  register,
  name,
  registerOptions,
  errors,
}) {
  return (
    <div className="sm:col-span-3">
      <label htmlFor={inputName} className="block text-sm leading-6">
        {label}
      </label>
      <input
        name={inputName}
        id={inputName}
        type={type}
        aria-labelledby={inputName}
        aria-required="true"
        autoComplete={autoComplete}
        placeholder={`Enter ${label} here`}
        className="indent-1 block w-full rounded py-1 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-cyan-600 sm:text-sm sm:leading-6"
        ref={forwardedRef}
        {...register(name, registerOptions)}
      />
      {errors[name] && (
        <small className="text-danger text-red-500">
          {errors[name].message}
        </small>
      )}
    </div>
  );
}

// export default function Input({
//   inputName,
//   field,
//   type,
//   value,
//   name,
//   autoComplete,
//   error,
//   onChange,
//   forwardedRef,
// }) {
//   return (
//     <>
//       <label htmlFor={inputName} className="block text-sm leading-6">
//         {field}
//       </label>
//       <input
//         type={type}
//         name={inputName}
//         id={inputName}
//         value={value}
//         onChange={onChange}
//         aria-labelledby={inputName}
//         //required
//         aria-required="true"
//         placeholder={name ? `Enter ${name} here` : ""}
//         autoComplete={autoComplete}
//         className="indent-1 block w-full rounded py-1 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-cyan-600 sm:text-sm sm:leading-6"
//         ref={forwardedRef}
//       />
//       {error && <p>Please provide a value</p>}
//     </>
//   );
// }
