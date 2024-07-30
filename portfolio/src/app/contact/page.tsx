import Link from "next/link";

export default async function Contact() {
  return (
    <div
      className="flex flex-col justify-center items-center tracking-wide 
       text-[#DAD7CD] font-light mt-10 md:mt-40 space-y-20 mb-10 md:mb-0
    "
    >
      <h1 className="text-3xl md:text-7xl">Contact Me</h1>
      <p className="text-xl md:text-3xl">joedo2910@gmail.com</p>
      <Link
        href="https://www.linkedin.com/in/hoanglehuydo/"
        className="text-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:font-normal hover:underline duration-150"
      >
        My LinkedIn
      </Link>
      <a
        href="/cv.pdf"
        download="Joe Do's Resume"
        className="text-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:font-normal hover:underline duration-150"
      >
        Download CV
      </a>
    </div>
  );
}
