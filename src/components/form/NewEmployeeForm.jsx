import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from "react-custom-accessible-modal";
//import { addEmployee } from "../../services/api";
import states from "../../data/states.json";
import departments from "../../data/departments.json";
import Dropdown from "./Dropdown";
import Input from "./Input";

//   const [state, setState] = useState("");
//   const [department, setDepartment] = useState("");

export default function NewEmployeeForm() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const namesPattern = /^([a-zA-Z-' ]+)$/;
  const zipCodePattern = /^[0-9]{5}(?:-[0-9]{4})?$/;

  const registerOptions = {
    firstName: {
      required: "* First name is required",
      pattern: {
        value: namesPattern,
        message:
          "First name should only contain letters, hyphens or apostrophes",
      },
    },
    lastName: {
      required: "* Last name is required",
      pattern: {
        value: namesPattern,
        message:
          "Last name should only contain letters, hyphens or apostrophes",
      },
    },
    birthDate: { required: "* Birth date is required" },
    street: { required: "* Street name is required" },
    city: {
      required: "* City is required",
      pattern: {
        value: namesPattern,
        message:
          "City name should only contain letters, hyphens or apostrophes",
      },
    },
    zipCode: {
      required: "* ZIP code is required",
      pattern: {
        value: zipCodePattern,
        message: "ZIP code must have 5 digits",
      },
    },
    state: { required: "* State is required" },
    startDate: { required: "* Start date is required" },
    department: { required: "* Department is required" },
  };

  useEffect(() => {
    document.title = "Register new employee";
    setFocus("firstName");
  }, []);

  const handleRegistration = async (data) => {
    console.log(data);

    if (data)
      try {
        setLoading(true);
        //await addEmployee(data);
        setError(null);
        setShowModal(true);
        reset();
      } catch (error) {
        console.error(error);
        setError("A server error occurred. Please try again later.");
      } finally {
        setLoading(false);
      }
  };

  const closeModal = () => {
    setShowModal(false);
    setFocus("firstName");
  };

  return (
    <form
      onSubmit={handleSubmit(handleRegistration)}
      className="create-employee my-10 pb-4 rounded-md bg-stone-100 shadow-lg shadow-gray-400 mx-10 xl:mx-60"
      id="create-employee"
      aria-label="Create a new employee form"
    >
      <h2 className="text-center py-4 border-b-2 border-b-lime-600 font-bold text-lg text-lime-700">
        New employee
      </h2>

      <div className="border-b-2 pb-6 border-dotted">
        <fieldset className="mx-10 ">
          <legend className="text-base font-semibold leading-10">
            Personal Information
          </legend>
          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Input
                name="firstName"
                inputName="first-name"
                label="First name"
                type="text"
                autoComplete="off"
                //autoComplete={"given-name"}
                register={register}
                errors={errors}
                registerOptions={registerOptions.firstName}
              />
            </div>

            <div className="sm:col-span-3">
              <Input
                name="lastName"
                inputName="last-name"
                label="Last name"
                type="text"
                autoComplete="off"
                //autoComplete={"family-name"}
                register={register}
                errors={errors}
                registerOptions={registerOptions.lastName}
              />
            </div>

            <div className="flex flex-col sm:col-span-4">
              <label htmlFor="birth-date" className="block text-sm leading-6">
                Date of birth
              </label>

              <Controller
                control={control}
                name="birthDate"
                rules={registerOptions.birthDate}
                render={({ field }) => (
                  <DatePicker
                    name="birthDate"
                    onChange={(birthDate) => field.onChange(birthDate)}
                    selected={field.value}
                    maxDate={new Date()}
                    placeholderText="dd/mm/yyyy"
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    showMonthDropdown
                    dropdownMode="select"
                    className="indent-1 block w-full rounded py-1 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-cyan-600 sm:text-sm sm:leading-6"
                  />
                )}
              />
              {errors.birthDate && (
                <small className="text-danger text-red-500">
                  {errors.birthDate.message}
                </small>
              )}
            </div>
          </div>
        </fieldset>
      </div>

      <div className="pb-6 border-b-2 border-dotted">
        <fieldset className="mx-10">
          <legend className="text-base font-semibold leading-7">Address</legend>
          <div className="grid grid-cols-1 gap-y-2 mt-3 md:gap-x-6 md:grid-cols-6">
            <div className="col-span-full">
              <Input
                name="street"
                inputName="street"
                label="Street"
                type="text"
                autoComplete="off"
                //autoComplete={"street-address"}
                register={register}
                errors={errors}
                registerOptions={registerOptions.street}
              />
            </div>
            <div className="sm:col-span-2">
              <Input
                name="city"
                inputName="city"
                label="City"
                type="text"
                autoComplete="off"
                //autoComplete="address-level2"
                register={register}
                errors={errors}
                registerOptions={registerOptions.city}
              />
            </div>
            <div className="sm:col-span-2">
              <Input
                name="zipCode"
                inputName="postal-code"
                label="ZIP code"
                type="text"
                autoComplete="off"
                //autoComplete={"postal-code"}
                register={register}
                errors={errors}
                registerOptions={registerOptions.zipCode}
              />
            </div>
            <Dropdown
              label="State"
              name="state"
              options={states}
              register={register}
              errors={errors}
              registerOptions={registerOptions.state}
            />

            {/* <Controller
              control={control}
              name="state"
              rules={registerOptions.state}
              render={({ field }) => (
                <Dropdown
                  defaultValue={field}
                  onChange={(state) => field.onChange(state)}
                  label="State"
                  name="state"
                  options={states}
                  selected={field.value}
                  register={register}
                  errors={errors}
                  registerOptions={registerOptions.state}
                />
              )}
            /> */}
          </div>
        </fieldset>
      </div>

      <div className="pb-6 border-b-2 border-dotted">
        <fieldset className="mx-10">
          <legend className="text-base font-semibold leading-7">
            Internal information
          </legend>
          <div className="grid gap-x-6 gap-y-2 mt-3 sm:grid-cols-6">
            <div className="flex flex-col sm:col-span-3 md:col-span-2">
              <label htmlFor="birth-date" className="block text-sm leading-6">
                Start date
              </label>

              <Controller
                control={control}
                name="startDate"
                rules={registerOptions.startDate}
                render={({ field }) => (
                  <DatePicker
                    name="startDate"
                    onChange={(startDate) => field.onChange(startDate)}
                    selected={field.value}
                    maxDate={new Date()}
                    placeholderText="dd/mm/yyyy"
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    showMonthDropdown
                    dropdownMode="select"
                    className="indent-1 block w-full rounded py-1 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-cyan-600 sm:text-sm sm:leading-6 "
                  />
                )}
              />
              {errors.startDate && (
                <small className="text-danger text-red-500">
                  {errors.startDate.message}
                </small>
              )}
            </div>

            <Dropdown
              name="department"
              label="Department"
              register={register}
              errors={errors}
              registerOptions={registerOptions.department}
              options={departments}
            />
          </div>
        </fieldset>
      </div>

      {error && <div className="mx-10 mt-4 text-red-500">{error}</div>}

      <div className="flex items-center justify-end gap-x-6 mx-10 mt-4 ">
        <button
          type="button"
          className="px-8 py-2 font-semibold text-sm leading-6"
          onClick={() => reset()}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-8 py-2 font-semibold text-sm text-white rounded-md bg-lime-600 hover:bg-cyan-600 hover:scale-105"
        >
          {loading ? "Loading..." : "Save"}
        </button>

        {showModal && (
          <div>
            <Modal
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              message="Employee created !"
              buttonText="OK"
              closeModal={closeModal}
              ariaLabel="OK, close modal"
            />
          </div>
        )}
      </div>
    </form>
  );
}

////// a garder

// import { useState, useEffect, useRef } from "react";
// import { useForm } from "react-hook-form";
// import DatePicker from "react-datepicker";
// import { addDays } from "date-fns";
// import "react-datepicker/dist/react-datepicker.css";
// import { Modal } from "react-custom-accessible-modal";
// import { addEmployee } from "../../services/api";
// import states from "../../data/states.json";
// import departments from "../../data/departments.json";
// import Dropdown from "./Dropdown";
// import Input from "./Input";

// export default function EmployeeForm() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [birthDate, setBirthDate] = useState("");
//   const [street, setStreet] = useState("");
//   const [city, setCity] = useState("");
//   const [zipCode, setZipCode] = useState("");
//   const [state, setState] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [department, setDepartment] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const inputRef = useRef(null);

//   useEffect(() => {
//     document.title = "Register new employee";
//     inputRef.current.focus();
//   }, []);

//   const saveEmployee = async (e) => {
//     e.preventDefault();
//     if (
//       lastName &&
//       firstName &&
//       birthDate &&
//       street &&
//       city &&
//       zipCode &&
//       startDate &&
//       department &&
//       state
//     )
//       try {
//         setLoading(true);
//         await addEmployee({
//           firstName,
//           lastName,
//           birthDate,
//           street,
//           city,
//           zipCode,
//           state,
//           department,
//           startDate,
//         });
//         setError(null);
//         setShowModal(true);
//         resetForm();
//       } catch (error) {
//         setError("A server error occurred. Please try again later...");
//       } finally {
//         setLoading(false);
//       }
//   };

//   const resetForm = () => {
//     setFirstName("");
//     setLastName("");
//     setBirthDate("");
//     setStreet("");
//     setCity("");
//     setZipCode("");
//     setStartDate("");
//     setDepartment("");
//     setState("");
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     inputRef.current.focus();
//   };

//   // const handleDateChange = (selectedDate) => {
//   //   const formattedDate = new Date(selectedDate).toLocaleDateString("en-GB");

//   //   //setBirthDate(formattedDate);
//   //   //setBirthDate(selectedDate);
//   //   console.log(selectedDate);

//   //   console.log(formattedDate);
//   // };

//   return (
//     <form
//       className="create-employee my-10 pb-4 rounded-md bg-green-50 shadow-lg shadow-gray-400 sm:mx-20 md:mx-40 lg:mx-60 "
//       id="create-employee"
//       aria-label="Create a new employee form"
//       onSubmit={saveEmployee}
//     >
//       <h2 className="text-center py-4 border-b-2 border-b-lime-600 font-bold text-lg text-lime-600">
//         New employee
//       </h2>
//       <div className="border-b-2 border-dotted pb-6">
//         <fieldset className="mx-10 ">
//           <legend className="text-base font-semibold leading-10">
//             Personal Information
//           </legend>
//           <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
//             <div className="sm:col-span-3">
//               <Input
//                 inputName={"first-name"}
//                 field={"First name"}
//                 type={"text"}
//                 name={"first name"}
//                 autoComplete={"given-name"}
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value.trim())}
//                 forwardedRef={inputRef}
//               />
//             </div>

//             <div className="sm:col-span-3">
//               <Input
//                 inputName={"last-name"}
//                 field={"Last name"}
//                 type={"text"}
//                 name={"last name"}
//                 autoComplete={"family-name"}
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value.trim())}
//               />
//             </div>

//             <div className="sm:col-span-4">
//               <Input
//                 inputName={"birth-date"}
//                 field={"Date of birth"}
//                 type={"date"}
//                 value={birthDate}
//                 onChange={(e) => {
//                   console.log(e.target.value.trim());
//                   setBirthDate(e.target.value.trim());
//                   console.log(birthDate);
//                 }}
//               />
//               {/* <div className="block text-sm leading-6">Date of birth</div>
//               <DatePicker
//                 name="birthDate"
//                 selected={birthDate}
//                 //onChange={(date) => setBirthDate(date)}
//                 // onChange={(date) =>
//                 //     setBirthDate(new Date(date).toLocaleString())
//                 //   }

//                 onChange={handleDateChange}
//                 maxDate={new Date()}
//                 placeholderText="dd/mm/yyyy"
//                 dateFormat="dd/MM/yyyy"
//                 showYearDropdown
//                 showMonthDropdown
//                 dropdownMode="select"
//                 required
//                 className="indent-1 block w-full rounded py-1 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               /> */}

//               {/* {error && <p>Please provide a value</p>} */}
//             </div>
//           </div>
//         </fieldset>
//       </div>

//       <div className="border-b-2 border-dotted pb-6">
//         <fieldset className="mx-10">
//           <legend className="text-base font-semibold leading-7">Address</legend>
//           <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
//             <div className="col-span-full">
//               <Input
//                 inputName={"street"}
//                 field={"Street"}
//                 type={"text"}
//                 name={"street"}
//                 autoComplete={"street-address"}
//                 value={street}
//                 onChange={(e) => setStreet(e.target.value.trim())}
//               />
//             </div>

//             <div className="sm:col-span-2 sm:col-start-1">
//               <Input
//                 inputName={"city"}
//                 field={"City"}
//                 type={"text"}
//                 name={"city"}
//                 autoComplete={"address-level2"}
//                 value={city}
//                 onChange={(e) => setCity(e.target.value.trim())}
//               />
//             </div>

//             <Dropdown
//               fieldName={"State"}
//               options={states}
//               value={state}
//               // onChange={(e) =>
//               //   setState(e.target.value.trim());
//               onChange={(value) => setState(value.name)}
//             />

//             <div className="sm:col-span-2">
//               <Input
//                 inputName={"postal-code"}
//                 field={"ZIP code"}
//                 type={"text"}
//                 name={"ZIP code"}
//                 autoComplete={"postal-code"}
//                 value={zipCode}
//                 onChange={(e) => setZipCode(e.target.value.trim())}
//               />
//             </div>
//           </div>
//         </fieldset>
//       </div>

//       <div className="border-b-2 border-dotted pb-6">
//         <fieldset className="mx-10">
//           <legend className="text-base font-semibold leading-7">
//             Internal information
//           </legend>
//           <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
//             <div className="sm:col-span-2 sm:col-start-1">
//               <Input
//                 inputName={"start-date"}
//                 field={"Start date"}
//                 type={"date"}
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value.trim())}
//               />
//             </div>

//             <Dropdown
//               fieldName={"Department"}
//               options={departments}
//               value={department}
//               onChange={(value) => setDepartment(value.name)}
//               //onChange={(e) => setDepartment(e.target.value.trim())}
//             />
//           </div>
//         </fieldset>
//       </div>

//       <div className="mt-4 flex items-center justify-end gap-x-6 mx-10">
//         <button
//           type="button"
//           className="px-8 py-2 font-semibold text-sm leading-6"
//           onClick={resetForm}
//         >
//           Cancel
//         </button>

//         <button
//           type="submit"
//           className="px-8 py-2 font-semibold text-sm text-white rounded-md bg-lime-600 hover:bg-cyan-600 hover:scale-105"
//         >
//           {loading ? "Loading..." : "Save"}
//         </button>

//         {error && <p className="text-red-500">{error}</p>}

//         {showModal && (
//           <div>
//             <Modal
//               icon={
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//               }
//               message={"Employee created !"}
//               buttonText={"OK"}
//               closeModal={closeModal}
//               ariaLabel={"OK, close modal"}
//             />
//           </div>
//         )}
//       </div>
//     </form>
//   );
// }
