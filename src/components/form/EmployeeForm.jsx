import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from "react-custom-accessible-modal";
import { addEmployee } from "../../services/api";
import states from "../../data/states.json";
import departments from "../../data/departments.json";
import Dropdown from "./Dropdown";
import Input from "./Input";

export default function EmployeeForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");
  const [startDate, setStartDate] = useState("");
  const [department, setDepartment] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    document.title = "Register new employee";
    inputRef.current.focus();
  }, []);

  const saveEmployee = async (e) => {
    e.preventDefault();
    if (
      lastName &&
      firstName &&
      birthDate &&
      street &&
      city &&
      zipCode &&
      startDate &&
      department &&
      state
    )
      try {
        setLoading(true);
        await addEmployee({
          firstName,
          lastName,
          birthDate,
          street,
          city,
          zipCode,
          state,
          department,
          startDate,
        });
        setError(null);
        setShowModal(true);
        resetForm();
      } catch (error) {
        setError("A server error occurred. Please try again later...");
      } finally {
        setLoading(false);
      }
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setBirthDate("");
    setStreet("");
    setCity("");
    setZipCode("");
    setStartDate("");
    setDepartment("");
    setState("");
  };

  const closeModal = () => {
    setShowModal(false);
    inputRef.current.focus();
  };

  // const handleDateChange = (selectedDate) => {
  //   const formattedDate = new Date(selectedDate).toLocaleDateString("en-GB");

  //   //setBirthDate(formattedDate);
  //   //setBirthDate(selectedDate);
  //   console.log(selectedDate);

  //   console.log(formattedDate);
  // };

  return (
    <form
      className="create-employee my-10 pb-4 rounded-md bg-green-50 shadow-lg shadow-gray-400 sm:mx-20 md:mx-40 lg:mx-60 "
      id="create-employee"
      aria-label="Create a new employee form"
      onSubmit={saveEmployee}
    >
      <h2 className="text-center py-4 border-b-2 border-b-lime-600 font-bold text-lg text-lime-600">
        New employee
      </h2>
      <div className="border-b-2 border-dotted pb-6">
        <fieldset className="mx-10 ">
          <legend className="text-base font-semibold leading-10">
            Personal Information
          </legend>
          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Input
                inputName={"first-name"}
                field={"First name"}
                type={"text"}
                name={"first name"}
                autoComplete={"given-name"}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value.trim())}
                forwardedRef={inputRef}
              />
            </div>

            <div className="sm:col-span-3">
              <Input
                inputName={"last-name"}
                field={"Last name"}
                type={"text"}
                name={"last name"}
                autoComplete={"family-name"}
                value={lastName}
                onChange={(e) => setLastName(e.target.value.trim())}
              />
            </div>

            <div className="sm:col-span-4">
              <Input
                inputName={"birth-date"}
                field={"Date of birth"}
                type={"date"}
                value={birthDate}
                onChange={(e) => {
                  console.log(e.target.value.trim());
                  setBirthDate(e.target.value.trim());
                  console.log(birthDate);
                }}
              />
              {/* <div className="block text-sm leading-6">Date of birth</div>
              <DatePicker
                name="birthDate"
                selected={birthDate}
                //onChange={(date) => setBirthDate(date)}
                // onChange={(date) =>
                //     setBirthDate(new Date(date).toLocaleString())
                //   }

                onChange={handleDateChange}
                maxDate={new Date()}
                placeholderText="dd/mm/yyyy"
                dateFormat="dd/MM/yyyy"
                showYearDropdown
                showMonthDropdown
                dropdownMode="select"
                required
                className="indent-1 block w-full rounded py-1 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              /> */}

              {error && <p>Please provide a value</p>}
            </div>
          </div>
        </fieldset>
      </div>

      <div className="border-b-2 border-dotted pb-6">
        <fieldset className="mx-10">
          <legend className="text-base font-semibold leading-7">Address</legend>
          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
            <div className="col-span-full">
              <Input
                inputName={"street"}
                field={"Street"}
                type={"text"}
                name={"street"}
                autoComplete={"street-address"}
                value={street}
                onChange={(e) => setStreet(e.target.value.trim())}
              />
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <Input
                inputName={"city"}
                field={"City"}
                type={"text"}
                name={"city"}
                autoComplete={"address-level2"}
                value={city}
                onChange={(e) => setCity(e.target.value.trim())}
              />
            </div>

            <Dropdown
              fieldName={"State"}
              options={states}
              value={state}
              // onChange={(e) =>
              //   setState(e.target.value.trim());
              onChange={(value) => setState(value.name)}
            />

            <div className="sm:col-span-2">
              <Input
                inputName={"postal-code"}
                field={"ZIP code"}
                type={"text"}
                name={"ZIP code"}
                autoComplete={"postal-code"}
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value.trim())}
              />
            </div>
          </div>
        </fieldset>
      </div>

      <div className="border-b-2 border-dotted pb-6">
        <fieldset className="mx-10">
          <legend className="text-base font-semibold leading-7">
            Internal information
          </legend>
          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
            <div className="sm:col-span-2 sm:col-start-1">
              <Input
                inputName={"start-date"}
                field={"Start date"}
                type={"date"}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value.trim())}
              />
            </div>

            <Dropdown
              fieldName={"Department"}
              options={departments}
              value={department}
              onChange={(value) => setDepartment(value.name)}
              //onChange={(e) => setDepartment(e.target.value.trim())}
            />
          </div>
        </fieldset>
      </div>

      <div className="mt-4 flex items-center justify-end gap-x-6 mx-10">
        <button
          type="button"
          className="px-8 py-2 font-semibold text-sm leading-6"
          onClick={resetForm}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-8 py-2 font-semibold text-sm text-white rounded-md bg-lime-600 hover:bg-cyan-600 hover:scale-105"
        >
          {loading ? "Loading..." : "Save"}
        </button>

        {error && <p className="text-red-500">{error}</p>}

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
              message={"Employee created !"}
              buttonText={"OK"}
              closeModal={closeModal}
              ariaLabel={"OK, close modal"}
            />
          </div>
        )}
      </div>
    </form>
  );
}
