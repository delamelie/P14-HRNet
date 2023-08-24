import { useState } from "react";

export default function Dropdown({ fieldName, field, autoComplete, options }) {
  const [selectedOption, setSelectedOption] = useState();

  console.log(selectedOption);

  return (
    <div className="sm:col-span-2">
      <label
        htmlFor={fieldName}
        className="block text-sm leading-6 text-gray-900"
      >
        {field}
      </label>

      <select
        name={fieldName}
        id={fieldName}
        autoComplete={autoComplete}
        aria-labelledby={fieldName}
        aria-required="true"
        //value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value.trim())}
        className="indent-1 block w-full rounded py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        <option value="">Choose an option</option>

        {options.map((option, index) => (
          <option key={index} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
