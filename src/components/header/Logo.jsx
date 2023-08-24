import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Logo() {
  return (
    <div className="flex items-center">
      <NavLink to="/">
        <img src={logo} alt="logo" className="w-28 mr-10 ml-10" />
      </NavLink>
      <h1 className="text-5xl text-lime-700">HRnet</h1>
    </div>
  );
}

// const Title = styled.h1`
//   color: #6d8412;
// `;
