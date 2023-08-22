// export default function CreateEmployee() {
//   return (
//     <div>
//       <div class="container">
//         <a href="employee-list.html">View current employees</a>
//         <h2>Create employee</h2>
//         <form
//           action="#"
//           id="create-employee"
//           aria-label="Create a new employee form"
//         >

//         </form>

//         <button type="submit" onClick="saveEmployee()">
//           Save
//         </button>
//       </div>
//       <div id="confirmation" class="modal">
//         Employee created!
//       </div>
//     </div>
//   );
// }

export default function CreateEmployee() {
  return (
    <form className="sm:mx-20 md:mx-40 lg:mx-60 my-10 py-6 rounded-md bg-green-50 shadow-lg shadow-gray-400 ">
      <div>
        <fieldset className="mx-10">
          <legend className="text-base font-semibold leading-10">
            Personal Information
          </legend>
          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm leading-6 text-gray-900"
              >
                First name
              </label>
              <div>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Enter first name here"
                  autoComplete="given-name"
                  aria-labelledby="first-name"
                  aria-required="true"
                  className="indent-1 block w-full rounded py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm leading-6 text-gray-900"
              >
                Last name
              </label>
              <div>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Enter last name here"
                  autoComplete="family-name"
                  aria-labelledby="last-name"
                  aria-required="true"
                  className="indent-1 block w-full rounded py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm leading-6 text-gray-900"
              >
                Date of birth
              </label>
              <div>
                <input
                  id="birth-date"
                  name="birth-date"
                  type="birth-date"
                  autoComplete="birth-date"
                  aria-labelledby="birth-date"
                  aria-required="true"
                  className="indent-1 block w-full rounded py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="mt-10 mx-10">
          <legend className="text-base font-semibold leading-7 text-gray-900">
            Address
          </legend>
          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm leading-6 text-gray-900"
              >
                Street address
              </label>
              <div>
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  placeholder="Enter address here"
                  autoComplete="street-address"
                  aria-labelledby="street"
                  aria-required="true"
                  className="indent-1 block w-full rounded py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-sm leading-6 text-gray-900"
              >
                City
              </label>
              <div>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter city here"
                  autoComplete="address-level2"
                  aria-labelledby="city"
                  aria-required="true"
                  className="indent-1 block w-full rounded py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="state"
                className="block text-sm leading-6 text-gray-900"
              >
                State
              </label>
              <div>
                <select
                  name="state"
                  id="state"
                  autoComplete="address-level1"
                  aria-labelledby="state"
                  aria-required="true"
                  className="indent-1 block w-full rounded py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm leading-6 text-gray-900"
              >
                ZIP code
              </label>
              <div>
                <input
                  type="number"
                  name="postal-code"
                  id="postal-code"
                  placeholder="Enter ZIP code here"
                  autoComplete="postal-code"
                  aria-labelledby="zip-code"
                  aria-required="true"
                  className="indent-1 block w-full rounded py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset className="mt-10 mx-10">
          <legend className="text-base font-semibold leading-7 text-gray-900">
            Internal information
          </legend>
          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="start-date"
                className="block text-sm leading-6 text-gray-900"
              >
                Start date
              </label>
              <div>
                <input
                  type="text"
                  name="start-date"
                  id="start-date"
                  autoComplete="start-date"
                  aria-labelledby="start-date"
                  aria-required="true"
                  className="block w-full rounded py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="department"
                className="block text-sm leading-6 text-gray-900"
              >
                Department
              </label>
              <div>
                <select
                  name="department"
                  id="department"
                  autoComplete="department"
                  className="block w-full rounded py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>Sales</option>
                  <option>Marketing</option>
                  <option>Engineering</option>
                  <option>Human Resources</option>
                  <option>Legal</option>
                </select>
              </div>
            </div>
          </div>
        </fieldset>
      </div>

      <div className="mt-16 flex items-center justify-end gap-x-6 mx-10">
        <button
          type="button"
          className="text-sm px-8 py-2 font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
