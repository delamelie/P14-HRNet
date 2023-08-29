import { useState } from "react";
import states from "../data/states.json";
import departments from "../data/departments.json";
import Button from "./Button";
import Dropdown from "./dropdown/Dropdown";
import Input from "./Input";
import Modal from "../components/Modal";

export default function CreateEmployeeForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [startDate, setStartDate] = useState("");
  const [department, setDepartment] = useState("");
  const [state, setState] = useState("");
  const [showModal, setShowModal] = useState(false);

  function saveEmployee(e) {
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
    ) {
      setShowModal(true);
      resetForm();
    }
  }

  function toggleModal() {
    setShowModal(!showModal);
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

  return (
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
        <Button type={"submit"} text={"Save"} />
        {showModal && (
          <div>
            <Modal toggleModal={toggleModal} />
          </div>
        )}
      </div>
    </form>
  );
}
