import { useEffect } from "react";
import Header from "../components/header/Header";

export default function Home() {
  useEffect(() => {
    document.title = "HRnet - Home";
  }, []);

  return (
    <>
      <Header />
      <h2 className="w-9/12 m-auto mt-40 text-center text-xl text-lime-600 sm:text-3xl">
        Welcome to your employee file management system
      </h2>
    </>
  );
}
