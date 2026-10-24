import bg from "../../../assets/bg-Solar.png";

const footerLinks = [
  ["Home", "#home"],
  ["About us", "#about"],
  ["Solutions", "#solutions"],
  ["Features", "#features"],
  ["How it works", "#how-it-works"],
];

const Footer = () => {
  return (
    <footer className="bg-[#0c100e] text-white">
      <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden px-6 py-12 text-center">
        <img
          src={bg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071b15]/45 via-[#071b15]/65 to-[#0c100e]" />
        <div className="relative max-w-xl">
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight"
            aria-label="Solaris home"
          >
            <span aria-hidden="true" className="text-3xl text-lime-300">☼</span>
            Solaris
          </a>
          <p className="mt-3 text-sm leading-6 text-white/75">
            Experience long-lasting performance and true energy independence
            with solar power.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <a
              href="mailto:hello@solaris.example"
              aria-label="Email Solaris"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-white/10 text-sm transition hover:bg-white/20"
            >
              @
            </a>
            <a
              href="#solutions"
              aria-label="Explore Solaris solutions"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-white/10 text-sm transition hover:bg-white/20"
            >
              ↗
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-10 pt-4 sm:grid-cols-2 md:px-10 lg:grid-cols-[1.7fr_0.8fr_0.8fr_1fr] lg:gap-12 lg:px-14 lg:pb-14">
        <div>
          <h2 className="text-sm font-semibold">Stay powered with the latest updates</h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">
            Get energy-saving tips, product updates, and solar insights
            delivered straight to your inbox.
          </p>
          <form
            action="mailto:hello@solaris.example"
            method="post"
            encType="text/plain"
            className="mt-5 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="footer-email" className="sr-only">
              Your email address
            </label>
            <input
              id="footer-email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/15 px-5 py-3 text-sm text-white outline-none placeholder:text-white/45 focus:border-lime-300"
            />
            <button
              type="submit"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#183327] transition hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-semibold">Main menu</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            {footerLinks.map(([label, href]) => (
              <li key={label}>
                <a className="transition hover:text-lime-200" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold">Contact</h2>
          <a
            href="mailto:hello@solaris.example"
            className="mt-4 inline-block text-sm text-white/60 transition hover:text-lime-200"
          >
            hello@solaris.example
          </a>
          <p className="mt-3 text-sm text-white/60">Here to help you go solar.</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Your next step</h2>
          <p className="mt-4 text-sm leading-6 text-white/60">
            Have a question about solar for your home or business?
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-lime-300 transition hover:text-lime-200"
          >
            Talk with our team <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-6 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between md:px-10 lg:px-14">
        <p>© {new Date().getFullYear()} Solaris. All rights reserved.</p>
        <a className="transition hover:text-white" href="#contact">
          Contact Solaris
        </a>
      </div>
    </footer>
  );
};

export default Footer;
