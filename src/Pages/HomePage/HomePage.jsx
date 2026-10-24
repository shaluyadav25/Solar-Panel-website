import bg from "../../assets/bg-Solar.png";
import solarHome from "../../assets/solar-home.jpg";
import solarStorage from "../../assets/solar-storage.jpg";
import solarCommercial from "../../assets/solar-commercial.jpg";
import solarSmartEnergy from "../../assets/solar-smart-energy.jpg";
import SqueezeCarousel from "../../Components/ui/SqueezeCarousel";
import HeroSection from "./Components/HeroSection";
import { useState } from "react";

const features = [
  {
    number: "01",
    title: "High-efficiency panels",
    description:
      "Turn more of every ray of sunshine into dependable power for your home.",
    icon: (
      <>
        <path d="M4 9h16l2 11H2L4 9Z" />
        <path d="M7 9 8 20m4-11v11m4-11-1 11M4 13h16m-17 4h18M12 3v3m-5-2 2 3m8-3-2 3" />
      </>
    ),
  },
  {
    number: "02",
    title: "Energy storage ready",
    description:
      "Store the energy you make and use it after sunset or during an outage.",
    icon: (
      <>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 2h6v2M9 9h6m-6 4h6m-6 4h6m8-7h2v6h-2" />
      </>
    ),
  },
  {
    number: "03",
    title: "Smart inverter tech",
    description:
      "Convert solar energy into safe, efficient power with real-time monitoring.",
    icon: (
      <>
        <path d="M12 2 4 13h6l-1 9 11-13h-7l-1-7Z" />
        <path d="M19 4h3m-1.5-1.5v3M3 19h3m-1.5-1.5v3" />
      </>
    ),
  },
  {
    number: "04",
    title: "Thoughtful by design",
    description:
      "Long-lasting, recyclable materials designed to reduce impact for years.",
    icon: (
      <>
        <path d="M20 4c-8 0-13 3-13 9a5 5 0 0 0 5 5c6 0 8-6 8-14Z" />
        <path d="M4 21c2-5 6-8 11-11M5 7c-2 1-3 3-3 5 0 2 1 3 2 4" />
      </>
    ),
  },
];

const solutions = [
  {
    id: "residential",
    title: "Residential solar",
    description:
      "A right-sized rooftop system that helps your home make its own clean electricity.",
    label: "For your home",
    image: solarHome,
    imageAlt: "Rows of rooftop solar panels under a bright sky",
    action: "Find your fit",
  },
  {
    id: "storage",
    title: "Battery storage",
    description:
      "Keep more of your solar energy on hand for evenings, peak rates, and outages.",
    label: "Power on your terms",
    image: solarStorage,
    imageAlt: "Solar panels installed across a wide open field",
    action: "Explore storage",
  },
  {
    id: "commercial",
    title: "Commercial solar",
    description:
      "Reduce operating costs and make sustainability part of your business plan.",
    label: "For your business",
    image: solarCommercial,
    imageAlt: "Large commercial solar array viewed from above",
    action: "Power your business",
  },
  {
    id: "smart-energy",
    title: "Smarter energy",
    description:
      "Bring solar, storage, and real-time energy insights together in one simple system.",
    label: "Everyday control",
    image: solarSmartEnergy,
    imageAlt: "Expansive solar farm producing clean energy",
    action: "See how it works",
  },
];

const processSteps = [
  {
    title: "Discover your solar potential",
    description:
      "We learn about your roof, energy use, and goals to understand how solar can work for your home.",
  },
  {
    title: "A system tailored to you",
    description:
      "Get a clear recommendation for panels and storage, planned around your property and budget.",
  },
  {
    title: "Installed with care",
    description:
      "Our team coordinates the installation and keeps you informed from preparation to switch-on.",
  },
  {
    title: "Start making your own power",
    description:
      "Once your system is ready, monitor your production and make the most of the energy you generate.",
  },
];

const HowItWorksSection = () => {
  const [openStep, setOpenStep] = useState(0);

  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-2 lg:items-stretch lg:gap-12 lg:px-14">
        <div className="py-2 lg:py-6">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e5eadf] bg-[#f5f6ef] px-4 py-2 text-xs font-semibold tracking-wide text-[#527447]">
            <span aria-hidden="true">•</span>
            How it works
            <span aria-hidden="true">•</span>
          </p>
          <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[#183327] md:text-5xl">
            Turning sunlight into savings.
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-[#66736a]">
            A clear, considered path from your first questions to dependable
            solar power at home.
          </p>

          <div className="mt-8 border-t border-[#e5eadf]">
            {processSteps.map((step, index) => {
              const isOpen = openStep === index;
              const panelId = `solar-step-${index}`;

              return (
                <div
                  key={step.title}
                  className="border-b border-[#e5eadf] transition-colors duration-300 hover:bg-[#f5f6ef]/70"
                  style={{
                    animation: "solar-card-in 600ms both",
                    animationDelay: `${index * 90}ms`,
                  }}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenStep(isOpen ? -1 : index)}
                      className="flex w-full items-center gap-3 py-5 text-left text-base font-semibold text-[#183327] transition hover:text-[#527447] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6b8e45] sm:text-lg"
                    >
                      <span className="font-mono text-sm text-[#6b8e45]">
                        ({index + 1})
                      </span>
                      <span className="flex-1">{step.title}</span>
                      <span
                        aria-hidden="true"
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#e5eadf] text-lg font-normal text-[#527447]"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    hidden={!isOpen}
                    className="pb-5 pl-10 pr-10 text-sm leading-6 text-[#66736a]"
                  >
                    {step.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="group relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[#183327] lg:min-h-full">
          <img
            src={bg}
            alt="Solar panels generating clean energy in the sunshine"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071b15]/70 via-[#071b15]/10 to-[#071b15]/15" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
            <svg
              viewBox="0 0 160 160"
              fill="none"
              aria-hidden="true"
              className="mb-5 h-32 w-32 text-white/80 sm:h-40 sm:w-40"
            >
              <circle cx="80" cy="80" r="45" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="80" cy="80" r="27" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M80 4v25m0 102v25M4 80h25m102 0h25M26 26l18 18m72 72 18 18m0-108-18 18m-72 72-18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="80" cy="80" r="8" fill="currentColor" />
            </svg>
            <p className="max-w-sm text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              From sunlight to savings,
              <br />
              made simple.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#183327] transition hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Let’s get started <span className="ml-2" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <section id="features" className="relative isolate overflow-hidden bg-[#10251d] py-20 text-white md:py-28">
        <img
          src={bg}
          alt="Solar panels and renewable energy"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#10251d]/85 via-[#10251d]/70 to-[#10251d]/45" />
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-md md:text-sm">
                <span aria-hidden="true">•</span>
                Features
                <span aria-hidden="true">•</span>
              </p>
              <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Powerful Features.
                <br />
                <span className="text-white/80">Real Impact.</span>
              </h2>
            </div>
            <div className="max-w-md md:pb-1">
              <p className="leading-7 text-white/80">
                Experience thoughtful solar technology designed to make clean
                energy dependable, simple, and ready for everyday life.
              </p>
              <a
                href="#solutions"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#183327] transition hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="group min-h-[235px] rounded-2xl border border-white/20 bg-white/[0.16] p-6 shadow-lg shadow-black/10 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/40 hover:bg-white/[0.24] md:p-7"
                style={{
                  animation: "solar-card-in 650ms both",
                  animationDelay: `${Number(feature.number) * 90}ms`,
                }}
              >
                <div className="mb-10 flex items-center justify-between">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-9 w-9 text-white"
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </svg>
                  <span className="text-xs tracking-[0.16em] text-white/55">
                    {feature.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/75">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#f5f6ef] py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:px-10 lg:grid-cols-2 lg:gap-20 lg:px-14">
          <div className="group relative min-h-[380px] overflow-hidden rounded-[2rem] bg-[#183a2c] md:min-h-[510px]">
            <img
              src={bg}
              alt="Solar panels collecting clean energy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071b15]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/15 p-5 text-white backdrop-blur-md md:bottom-8 md:left-8 md:right-8">
              <p className="text-3xl font-semibold">A smarter way to power life.</p>
              <p className="mt-2 text-sm text-white/80">
                Clean energy starts right where you are.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#527447] md:text-sm">
              Energy, reimagined
            </p>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#183327] md:text-5xl">
              Your sunshine.
              <br />
              Your power.
              <br />
              <span className="text-[#6b8e45]">Your future.</span>
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-[#5d6c62]">
              Going solar should feel simple. We bring together proven
              technology, clear guidance, and dependable support to help you
              make a confident switch to clean energy.
            </p>
            <div className="mt-9 space-y-5">
              {[
                ["Designed around you", "A system planned for your energy use and your roof."],
                ["Quality at every step", "Careful installation, trusted equipment, and lasting support."],
                ["More control, less waste", "Make better use of the energy your home already receives."],
              ].map(([title, description], index) => (
                <div
                  key={title}
                  className="group flex gap-4 rounded-xl p-2 transition duration-300 hover:translate-x-1 hover:bg-white/70"
                  style={{
                    animation: "solar-card-in 600ms both",
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#dce8cf] text-sm font-bold text-[#3d6735]">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#183327]">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#66736a]">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#183327] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#284a37]"
            >
              Get to know Solaris <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <HowItWorksSection />

      <section id="solutions" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#6b8e45] md:text-sm">
              Our solutions
            </p>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#183327] md:text-5xl">
              One brighter choice.
              <br />
              <span className="text-[#6b8e45]">Many ways to make it.</span>
            </h2>
          </div>
          <SqueezeCarousel
            slides={solutions}
            label="Solar solutions"
            duration={850}
          />
        </div>
      </section>

      <section className="bg-[#eaf0e3] py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 text-center sm:grid-cols-3 md:px-10 lg:px-14">
          {[
            ["25 years", "Performance warranty options"],
            ["Lower bills", "Generate power where you use it"],
            ["One team", "Guidance from first call to switch-on"],
          ].map(([stat, caption], index) => (
            <div
              key={stat}
              className="rounded-2xl border border-transparent px-4 py-5 transition duration-300 hover:-translate-y-2 hover:border-white/80 hover:bg-white/70 hover:shadow-lg hover:shadow-[#183327]/[0.06]"
              style={{
                animation: "solar-card-in 650ms both",
                animationDelay: `${index * 120}ms`,
              }}
            >
              <p className="text-3xl font-semibold tracking-tight text-[#183327] md:text-4xl">
                {stat}
              </p>
              <p className="mt-2 text-sm text-[#66736a]">{caption}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-[#10251d] px-6 py-20 text-white md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-9 rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 transition duration-500 hover:border-white/20 hover:bg-white/[0.08] md:flex-row md:items-center md:justify-between md:p-12 lg:p-16">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-lime-300 md:text-sm">
              Ready when you are
            </p>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Let’s bring your
              <br className="hidden sm:block" /> energy home.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-white/70">
              Tell us what you need. We’ll help you explore your options with
              friendly, no-pressure guidance.
            </p>
          </div>
          <a
            href="mailto:hello@solaris.example?subject=Solar%20consultation"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-lime-300 px-7 py-4 text-sm font-bold text-[#14251c] transition hover:bg-lime-200"
          >
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default HomePage;
