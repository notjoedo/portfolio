import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div className="flex  space-x-40">
        <Link
          href="https://cherienails.com"
          className="text-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:font-normal duration-150"
        >
          <Image
            src="/cheriewhite.png"
            alt="cherienails"
            width="500"
            height="500"
          ></Image>
        </Link>
        <div className="flex flex-col justify-center items-center space-y-10">
          <h1 className="text-5xl text-[#DAD7CD] font-light tracking-wide pt-5">
            Nail Salon Website
          </h1>
          <p className="text-[#DAD7CD] font-light text-wrap max-w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
