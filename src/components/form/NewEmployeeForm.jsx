import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from "react-custom-accessible-modal";
import { addEmployee } from "../../services/api";
import states from "../../data/states.json";
import departments from "../../data/departments.json";
import Dropdown from "./Dropdown";
import Input from "./Input";

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
    if (data)
      try {
        setLoading(true);
        await addEmployee(data);
        setError(null);
        setShowModal(true);
        reset();
      } catch (error) {
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
                register={register}
                errors={errors}
                registerOptions={registerOptions.zipCode}
              />
            </div>
            <Dropdown
              dropdownName="state"
              label="State"
              name="state"
              options={states}
              register={register}
              errors={errors}
              registerOptions={registerOptions.state}
            />
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
              dropdownName="department"
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
