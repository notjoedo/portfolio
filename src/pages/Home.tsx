import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="mt-0 md:mt-24 flex flex-col items-center justify-center">
      <div
        className="relative overflow-hidden rounded-full border-2 border-[#A3B18A] shadow-sm shadow-[#DAD7CD] transition ease-in delay-150 
      hover:-translate-y-1 hover:scale-110 hover:border-[#DAD7CD] duration-150 m-7 md:m-0"
      >
        <Link to="/about">
          <img
            className="rounded-full w-[350px] h-[350px] object-cover"
            src="/me.png"
            alt="Joe"
          />
        </Link>
      </div>
      <div className="w-max mb-10 md:mb-0">
        <h1
          className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white
         pr-5 mt-0 md:mt-10 text-3xl font-light text-[#DAD7CD] tracking-[-0.10em]"
        >
          Hello, my name is Joe.
        </h1>
      </div>
    </div>
  )
} 