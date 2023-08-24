import states from "../data/states.json";
import departments from "../data/departments.json";

import Button from "./Button";
import Dropdown from "./Dropdown";
import Input from "./Input";
import { useState, useEffect } from "react";

export default function CreateEmployeeForm() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [birthDate, setBirthDate] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [zipCode, setZipCode] = useState();
  const [startDate, setStartDate] = useState();

  function resetForm() {
    console.log("hello");
    setFirstName("");
    setLastName("");
    setBirthDate("");
    setStreet("");
    setCity("");
    setZipCode("");
    setStartDate("");
  }
  return (
    <form
      className="sm:mx-20 md:mx-40 lg:mx-60 my-10 pb-4 rounded-md bg-green-50 shadow-lg shadow-gray-400 "
      id="create-employee"
      aria-label="Create a new employee form"
    >
      <h2 className="flex justify-center py-4 border-b-2 font-bold text-lime-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#596F09"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
          />
        </svg>
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
                value={firstName}
                type={"text"}
                name={"first name"}
                autoComplete={"given-name"}
              />
            </div>

            <div className="sm:col-span-3">
              <Input
                inputName={"last-name"}
                field={"Last name"}
                value={lastName}
                type={"text"}
                name={"last name"}
                autoComplete={"family-name"}
              />
            </div>

            <div className="sm:col-span-4">
              <Input
                inputName={"birth-date"}
                field={"Date of birth"}
                type={"date"}
                value={birthDate}
              />
            </div>
          </div>
        </fieldset>
      </div>

      <div className="border-b-2 border-dotted pb-6">
        <fieldset className="mx-10">
          <legend className="text-base font-semibold leading-7 text-gray-900">
            Address
          </legend>
          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
            <div className="col-span-full">
              <Input
                inputName={"street"}
                field={"Street"}
                value={street}
                type={"text"}
                name={"street"}
                autoComplete={"street-address"}
              />
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <Input
                inputName={"city"}
                field={"City"}
                value={city}
                type={"text"}
                name={"city"}
                autoComplete={"address-level2"}
              />
            </div>

            <Dropdown
              fieldName={"state"}
              field={"State"}
              autoComplete={"address-level1"}
              options={states}
            />

            <div className="sm:col-span-2">
              <Input
                inputName={"postal-code"}
                field={"ZIP code"}
                type={"text"}
                value={zipCode}
                name={"ZIP code"}
                autoComplete={"postal-code"}
              />
            </div>
          </div>
        </fieldset>
      </div>

      <div className="border-b-2 border-dotted pb-6">
        <fieldset className="mx-10">
          <legend className="text-base font-semibold leading-7 text-gray-900">
            Internal information
          </legend>
          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
            <div className="sm:col-span-2 sm:col-start-1">
              <Input
                inputName={"start-date"}
                field={"Start date"}
                type={"date"}
                value={startDate}
              />
            </div>

            <Dropdown
              fieldName={"department"}
              field={"Department"}
              options={departments}
            />
          </div>
        </fieldset>
      </div>

      <div className="mt-4 flex items-center justify-end gap-x-6 mx-10">
        <button
          type="button"
          className="text-sm px-8 py-2 font-semibold leading-6 text-gray-900"
          // onClick={"saveEmployee()"}
          onClick={resetForm}
        >
          Cancel
        </button>
        <Button type={"submit"} text={"Save"} />
      </div>
    </form>
  );
}

//       <div id="confirmation" class="modal">
//         Employee created!
//       </div>
