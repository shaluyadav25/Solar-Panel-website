
import bg from "../../../assets/bg-Solar.png";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={bg}
        alt="Solar panels"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

 

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-10">

        <h1 className="max-w-3xl text-3xl md:text-5xl lg:text-7xl font-medium text-white">
          Clean Energy that Plays for Itself
        </h1>

        {/* Features */}
        <div className="my-10 flex flex-col gap-5 text-white">

         

          <div>
            <h2 className="text-xl md:text-2xl font-semibold">
              Long-Term Durability
            </h2>
            <p className="mt-2 text-base md:text-lg">
              25-year weather-resistant warranty.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold">
              Smart Energy Monitoring
            </h2>
            <p className="mt-2 text-sm md:text-lg">
              Track energy production from your smartphone.
            </p>
          </div>

        </div>

<div>
            <h2 className="text-lg md:text-xl text-white font-semibold">
How Solar Cuts Your Bills            </h2>
            <p className="mt-2 text-white text-sm md:text-lg">
  Discover how modern solar panels instantly lower monthly
            energy bills.            </p>
          </div>

      </div>
    </div>
  );
};

export default HeroSection;
