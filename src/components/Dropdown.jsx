// export default function Dropdown({
//   label,
//   name,
//   id,
//   ariaLabelledby,
//   fieldName,
//   options,
//   value,
//   onChange,
//   error,
// }) {
//   return (
//     <div className="sm:col-span-2">
//       <label htmlFor={label} className="block text-sm leading-6">
//         {fieldName}
//       </label>

//       <select
//         name={name}
//         id={id}
//         aria-labelledby={ariaLabelledby}
//         aria-required="true"
//         required
//         value={value}
//         onChange={onChange}
//         className="block w-full rounded h-8 py-1 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//       >
//         <option value="">Choose an option</option>

//         {options.map((option, index) => (
//           <option key={index} value={option.name}>
//             {option.name}
//           </option>
//         ))}
//       </select>
//       {error && <p>Please provide a value</p>}
//     </div>
//   );
// }

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown({ fieldName, options, value, onChange }) {
  const [selected, setSelected] = useState(value);
  console.log(selected.name);
  console.log(selected);

  return (
    // <Listbox value={selected} onChange={setSelected}>
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <>
          <div className="sm:col-span-2">
            <Listbox.Label className="block text-sm leading-6">
              {fieldName}
            </Listbox.Label>
            <div className="relative">
              <Listbox.Button className="block w-full cursor-default rounded bg-white h-8 ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                <span className="indent-1 flex items-center truncate">
                  {selected.name || "Choose an option"}{" "}
                </span>

                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {options.map((option, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active }) =>
                        classNames(
                          active ? "bg-indigo-600 text-white" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={option}
                      onChange={setSelected}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {option.name}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </div>
        </>
      )}
    </Listbox>
  );
}
