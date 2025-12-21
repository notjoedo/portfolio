const Activities = () => {
  return (
    <div className="min-h-screen pt-4 sm:pt-6 pb-32 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
      <div className="mb-10 sm:mb-12 md:mb-16 mx-auto w-full md:max-w-6xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-coolvetica-condensed text-[#252525] dark:text-[#D9D9D9] mb-3 sm:mb-4">
          activities
        </h1>
        <div className="w-full border-t border-[#CAC4D0] dark:border-[#4A4A4A]"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 md:gap-20 lg:gap-24 items-center justify-center mx-auto w-full md:max-w-6xl">
        <div className="flex flex-col items-center">
          <img
            src="/atlas.png"
            alt="Atlas"
            className="h-64 sm:h-80 md:h-96 object-contain mb-3 sm:mb-4"
          />
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-coolvetica-condensed text-left w-full">
            <a
              href="https://devpost.com/software/atlas-4kd1lf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A3A3A3] hover:text-[#37AB31] underline transition-colors"
            >
              atlas
            </a>
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-coolvetica-condensed text-[#A3A3A3] text-left w-full">
            2nd place winner, Marriot CodeFest
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/gigglebytes.png"
            alt="Gigglebytes"
            className="h-64 sm:h-80 md:h-96 object-contain mb-3 sm:mb-4"
          />
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-coolvetica-condensed text-left w-full">
            <a
              href="https://datafest-website.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A3A3A3] hover:text-[#37AB31] underline transition-colors"
            >
              gigglebytes
            </a>
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-coolvetica-condensed text-[#A3A3A3] text-left w-full">
            1st place winner, VT Data Competition
          </p>
        </div>
      </div>
    </div>
  );
};

export default Activities;