import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Logo() {
  return (
    <div className="flex items-center">
      <NavLink to="/">
        <img
          src={logo}
          alt="logo"
          className="w-24 mr-2 ml-10 md:w-28 md:mr-10"
        />
      </NavLink>
      <h1 className="text-3xl text-lime-700 md:text-5xl">HRnet</h1>
    </div>
  );
}

// const Title = styled.h1`
//   color: #6d8412;
// `;
