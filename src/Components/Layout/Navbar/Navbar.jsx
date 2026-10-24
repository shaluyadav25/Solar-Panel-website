import { useState } from "react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Solutions", "#solutions"],
  ["Features", "#features"],
  ["How it works", "#how-it-works"],
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="absolute left-0 top-0 z-30 w-full text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-14 lg:py-6">
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-3"
          aria-label="Solaris home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-300 text-xl text-[#183327]">
            ☼
          </span>
          <span className="text-xl font-bold tracking-tight">solaris</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-white/80 transition hover:text-lime-200"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-white px-5 py-3 text-sm font-bold text-[#183327] transition hover:bg-lime-200 lg:inline-flex"
        >
          Get a quote <span className="ml-2" aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-2xl lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? "×" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="mx-4 rounded-2xl border border-white/15 bg-[#10251d]/95 p-5 shadow-xl backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-lime-200"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-lime-300 px-5 py-3 text-center text-sm font-bold text-[#183327]"
            >
              Get a quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
