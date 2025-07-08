import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="p-5 tracking-[-0.10em] text-2xl sm:text-xl lg:text-3xl text-[#DAD7CD] font-extralight flex flex-col sm:flex-row justify-between items-center sm:items-start">
      <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:font-normal duration-150 mb-4 sm:mb-0">
        <Link to="/">Home</Link>
      </div>
      <div className="space-y-4 sm:space-y-0 sm:space-x-5 flex flex-col sm:flex-row items-center">
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:font-normal duration-150">
          <Link to="/about">About</Link>
        </div>
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:font-normal duration-150">
          <Link to="/contact">Contact</Link>
        </div>
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:font-normal duration-150">
          <Link to="/projects">Projects</Link>
        </div>
      </div>
    </div>
  );
}
