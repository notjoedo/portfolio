import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col m-10 p-10 justify-start items-start">
      <div className="flex flex-row md:flex-row items-center">
        <div className="relative overflow-hidden rounded-full border-2 border-[#A3B18A] shadow-sm shadow-[#DAD7CD] mb-6 md:mb-0 md:mr-6 flex-shrink-0">
          <Image
            className="rounded-full"
            src="/me.png"
            width={250}
            height={250}
            alt="Joe"
          />
        </div>
        <div className="flex-row text-center md:text-left">
          <h1
            className="animate-typeonce overflow-hidden whitespace-nowrap border-r-4 border-r-white
         px-10 text-xl font-light text-[#DAD7CD] leading-8 space-y-5"
          >
            I'm a student majoring in Computational Modeling & Data Analytics
            and minoring in Computer Science at Virginia Tech! <br /> I love
            full-stack development and learning all sorts of programming stuff.
            Whether it's front-end design or back-end logic, <br /> I enjoy the
            challenge and creativity that comes with building apps. In my free
            time, I'm always exploring new tech and looking to level up my
            skills. <br />
            Thanks for taking a moment to get to know me!
          </h1>
        </div>
      </div>
    </div>
  );
}
