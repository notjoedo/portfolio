import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-start pl-4 sm:pl-6 md:pl-16 lg:pl-24">
      <div className="space-y-[6px] sm:space-y-[10px] md:space-y-[15px]">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-coolvetica-regular font-bold tracking-wide">
          <span className="text-[#252525] dark:text-[#D9D9D9]">hello, i'm </span>
          <span className="text-[#37AB31]">joe</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-[50px] font-coolvetica-condensed text-[#252525] dark:text-[#D9D9D9]">
          ai solutions engineer
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-[50px] font-coolvetica-condensed text-[#252525] dark:text-[#D9D9D9]">
          here's <Link to="/activities" className="text-[#37AB31] underline hover:opacity-70 transition-opacity">what</Link> i'm up to
        </p>
      </div>
    </div>
  );
};

export default Hero;
