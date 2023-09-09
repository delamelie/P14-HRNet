import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="flex flex-col justify-between items-center my-4 shadow-lg shadow-gray-400 sm:flex-row">
      <Logo />
      <NavBar />
    </header>
  );
}
