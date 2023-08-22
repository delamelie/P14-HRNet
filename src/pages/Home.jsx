import Header from "../components/header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <h2 className="h-screen flex justify-center items-center text-lime-600 text-3xl">
        Welcome to our employee file management system
      </h2>
    </div>
  );
}
