import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Logo() {
  return (
    <div className="flex items-center mb-6">
      <NavLink to="/">
        <img
          src={logo}
          alt="Company logo, link to the homepage"
          aria-label="Link to the homepage"
          className="w-24 h-auto mr-2 ml-10 md:w-28 lg:mr-10"
        />
      </NavLink>
      <h1 className="text-2xl text-lime-600 sm:text-3xl lg:text-5xl">HRnet</h1>
    </div>
  );
}
