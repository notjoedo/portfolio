const Contact = () => {
  return (
    <div className="min-h-screen pt-4 sm:pt-6 pb-32 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
      <div className="mb-10 sm:mb-12 md:mb-16 mx-auto w-full md:max-w-6xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-coolvetica-condensed text-[#252525] dark:text-[#D9D9D9] mb-3 sm:mb-4">
          contact
        </h1>
        <div className="w-full border-t border-[#CAC4D0] dark:border-[#4A4A4A]"></div>
      </div>

      <div className="flex flex-col gap-6 sm:gap-8 mx-auto w-full md:max-w-6xl">
        <p className="font-coolvetica-condensed text-sm sm:text-base md:text-lg lg:text-xl tracking-wide text-[#252525] dark:text-[#D9D9D9]">
          let's work together! Email me at{' '}
          <a 
            href="mailto:joedo2910@gmail.com" 
            className="text-[#37AB31] hover:opacity-70 transition-opacity"
          >
            @joedo2910@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
