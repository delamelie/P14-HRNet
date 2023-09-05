import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { addEmployee } from "../services/api";
import states from "../data/states.json";
import departments from "../data/departments.json";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Input from "./Input";
import Modal from "../components/modal/Modal";

export default function CreateEmployeeForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState(null);
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
  }, []);

  async function saveEmployee(e) {
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
  }

  function resetForm() {
    setFirstName("");
    setLastName("");
    setBirthDate("");
    setStreet("");
    setCity("");
    setZipCode("");
    setStartDate("");
    setDepartment("");
    setState("");
  }

  function closeModal() {
    setShowModal(false);
    inputRef.current.focus();
  }

  return (
    <div>
      <form
        className="sm:mx-20 md:mx-40 lg:mx-60 my-10 pb-4 rounded-md bg-green-50 shadow-lg shadow-gray-400 "
        id="create-employee"
        aria-label="Create a new employee form"
        onSubmit={saveEmployee}
      >
        <h2 className="flex justify-center py-4 border-b-2 border-b-lime-700 font-bold text-lg text-lime-700">
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
                  onChange={(e) => setBirthDate(e.target.value.trim())}
                />

                {/* <div className="block text-sm leading-6">Date of birth</div>
                <DatePicker
                  name="birthDate"
                  selected={birthDate}
                  onChange={(date) => setBirthDate(date)}
                  maxDate={addDays(new Date(), 0)}
                  placeholderText="dd/mm/yyyy"
                  dateFormat="dd/MM/yyyy"
                  showIcon={true}
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
            <legend className="text-base font-semibold leading-7">
              Address
            </legend>
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
                label={"state"}
                name={"state"}
                id={"state"}
                ariaLabelledby={"state"}
                fieldName={"State"}
                autoComplete={"address-level1"}
                options={states}
                value={state}
                onChange={(e) => setState(e.target.value.trim())}
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
                label={"department"}
                name={"department"}
                id={"department"}
                ariaLabelledby={"department"}
                fieldName={"Department"}
                options={departments}
                value={department}
                onChange={(e) => setDepartment(e.target.value.trim())}
              />
            </div>
          </fieldset>
        </div>

        <div className="mt-4 flex items-center justify-end gap-x-6 mx-10">
          <button
            type="button"
            className="text-sm px-8 py-2 font-semibold leading-6"
            onClick={resetForm}
          >
            Cancel
          </button>
          <Button type={"submit"} text={loading ? "Loading..." : "Save"} />
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
                // closeModal={() => setShowModal(!showModal)}
                closeModal={closeModal}
                ariaLabel={"OK, fermer la fenêtre"}
              />
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
