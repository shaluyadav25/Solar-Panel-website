import { useState } from "react";

const Navbar = () => {
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-10 bg-transparent text-white">
      <div className="flex justify-between items-center p-4">
        <div className="text-3xl font-bold">Solaris</div>
        <button
          onClick={() => setIsOpen(!IsOpen)}
          className="text-3xl lg:hidden"
        >
          {IsOpen ? "X" : "☰"}
        </button>

        <ul className="hidden lg:flex gap-6 font-semibold text-2xl">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button className="hidden lg:block bg-white py-2 px-3 rounded-xl text-blue-950 font-semibold m-3">
          Enquiry
        </button>
      </div>
      {IsOpen && (
        <ul className="flex flex-col gap-4 p-5 bg-white text-black lg:hidden">
          <li>
            <a href="#" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setIsOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
          <button onClick={()=>setIsOpen(false)} className="bg-blue-700 py-2 px-3 w-full rounded-xl text-white font-semibold m-3">
            Enquiry
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
