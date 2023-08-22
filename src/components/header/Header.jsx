import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div>
      <header className="flex justify-between h-40 border-4">
        <Logo />
        <NavBar />
      </header>
    </div>
  );
}
