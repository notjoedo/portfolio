import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-12 md:mt-36 flex flex-col items-center justify-center">
      <div
        className="relative overflow-hidden rounded-full border-2 border-[#A3B18A] shadow-sm shadow-[#DAD7CD] transition ease-in delay-150 
      hover:-translate-y-1 hover:scale-110 hover:border-[#DAD7CD] duration-150 m-7 md:m-0"
      >
        <Link href="/about">
          <Image
            className="rounded-full"
            src="/me.png"
            width={400}
            height={400}
            alt="Joe"
            priority={true}
          />
        </Link>
      </div>
      <div className="w-max mb-10 md:mb-0">
        <h1
          className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white
         pr-5 mt-10 text-3xl font-light text-[#DAD7CD] tracking-[-0.10em]"
        >
          Hello, my name is Joe.
        </h1>
      </div>
    </div>
  );
}
