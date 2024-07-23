import Link from "next/link";

export default function Contact() {
  return (
    <div
      className="flex flex-col justify-center items-center tracking-wide 
       text-[#DAD7CD] font-light mt-20 space-y-20
    "
    >
      <h1 className="text-7xl">Contact Me</h1>
      <p className="text-3xl">joedo2910@gmail.com</p>
      <Link
        href="https://www.linkedin.com/in/hoanglehuydo/"
        className="text-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:font-normal duration-150"
      >
        My LinkedIn
      </Link>
      <p className="text-3xl">Download my CSV</p>
    </div>
  );
}
