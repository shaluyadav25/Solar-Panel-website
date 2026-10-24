import bg from "../../../assets/bg-Solar.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[780px] items-center overflow-hidden bg-[#10251d] text-white md:min-h-[850px]"
    >
      <img
        src={bg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={bg}
        aria-hidden="true"
      >
        <source
          src="https://cdn.pixabay.com/video/2024/09/06/230113_large.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-[#071b15]/90 via-[#0b211a]/65 to-[#0b211a]/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071b15]/60 via-transparent to-black/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-36 md:px-10 lg:px-14 lg:pb-32">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-lime-200 backdrop-blur-md md:text-sm">
            <span className="h-2 w-2 rounded-full bg-lime-300" />
            Powering a brighter tomorrow
          </p>
          <h1 className="text-5xl font-semibold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">
            Clean energy
            <br />
            that <span className="text-lime-300">pays for itself.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/80 md:text-lg md:leading-8">
            Make the switch to dependable solar power. Lower your energy bills,
            take control of your electricity, and leave a lighter footprint.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-lime-300 px-7 py-4 text-sm font-bold text-[#14251c] transition hover:bg-lime-200"
            >
              Get a free consultation <span aria-hidden="true">↗</span>
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Explore our solutions
            </a>
          </div>
        </div>

        <div className="mt-16 flex max-w-3xl flex-wrap gap-x-10 gap-y-5 border-t border-white/20 pt-6 text-sm text-white/80 md:mt-20">
          <p>
            <span className="block text-2xl font-semibold text-white">25+</span>
            years of performance
          </p>
          <p>
            <span className="block text-2xl font-semibold text-white">100%</span>
            clean energy
          </p>
          <p>
            <span className="block text-2xl font-semibold text-white">Zero</span>
            compromise on quality
          </p>
        </div>
      </div>
      <a
        href="#features"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-white/75 md:flex"
      >
        Scroll to discover <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
};

export default HeroSection;
