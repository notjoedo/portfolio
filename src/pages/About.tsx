const About = () => {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-32 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 flex flex-col">
      <div className="mb-10 sm:mb-12 md:mb-16">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-coolvetica-condensed text-[#252525] dark:text-[#D9D9D9] mb-3 sm:mb-4">
          about
        </h1>
        <div className="w-full border-t border-[#CAC4D0] dark:border-[#4A4A4A] max-w-[95%]"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center md:items-center justify-center mx-auto w-full md:max-w-6xl">
        <div className="flex flex-col items-center shrink-0 w-full md:w-auto">
          <img
            src="/pfp.jpeg"
            alt="Joe Do"
            className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full object-cover mb-3 sm:mb-4"
          />
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-coolvetica-condensed text-[#252525] dark:text-[#D9D9D9] text-center">
            Joe Do
          </h2>
        </div>

        <div className="flex-1 w-full md:max-w-3xl flex flex-col items-start">
          <div className="space-y-2 font-coolvetica-condensed text-sm sm:text-base md:text-lg lg:text-xl text-[#252525] dark:text-[#D9D9D9] leading-relaxed w-full text-left">
            <p>
              Curious, ambitious software engineer driving impact through AI.
            </p>
            <p>
              Currently, studying Data Science at{' '}
              <span className="text-[#37AB31]">Virginia Tech</span> and working as a tech lead @{' '}
              <span className="text-[#37AB31]">Projectr</span>. I am set to be an AI and IoT Intern @{' '}
              <span className="text-[#37AB31]">SAS</span> in Summer 2026.
            </p>
            <p>
              Previously, I was an AI Integration & Software Engineer @{' '}
              <span className="text-[#37AB31]">Centennial Technologies</span>, working on Retrieval Augmented Generation (RAG) and Robotic Process Automation (RPA) pipelines.
            </p>
            <p>
              Prior to that, I was a tech lead @{' '}
              <span className="text-[#37AB31]">Phased Array Microphonic</span> (Undergraduate Research), building sound amplification systems supported by <span className="text-[#37AB31]">GenAI</span>. I am currently writing a research paper for this project!
            </p>
          </div>

          <button className="mt-4 sm:mt-5 md:mt-6 w-[75px] h-[32px] sm:w-[80px] sm:h-[35px] md:w-[90px] md:h-[40px] bg-[#37AB31] text-white font-coolvetica-condensed text-sm sm:text-base md:text-lg rounded-full shadow-sm hover:opacity-90 transition-opacity flex items-center justify-center">
            resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
