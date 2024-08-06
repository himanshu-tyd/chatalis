import { logo } from "./assets";
import { Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages";
import { useEffect, useState } from "react";

const App = () => {
  return (
    <section className=" h-[100vh] relative bg-bgPrimary ">
      {/* ------header ------- */}

      <header className="w-full h-[180px] bg-dark max-sm:justify-center items-start  flex md:pl-[200px] lg:pl-[380px]">
        <img src={logo} alt="logo" className="w-[220px] h-auto mt-5" />
      </header>

      {/* ------main------- */}

      <main className="w-full flex justify-center ">
        <div className=" w-full h-[80%] lg:w-[900px] lg:h-[500px] box-shadow bg-white rounded-[25px] absolute top-32  z-10">
          <Home />
        </div>
      </main>
    </section>
  );
};

export default App;
