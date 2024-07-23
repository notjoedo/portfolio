import Link from "next/link";

export default function Header() {
  return (
    <div className="p-5 tracking-[-0.10em] text-3xl text-[#DAD7CD] font-extralight flex justify-between">
      <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:font-normal duration-150">
        <Link href="/">Home</Link>
      </div>
      <div className="space-x-5 flex">
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:font-normal duration-150">
          <Link href="/about">About</Link>
        </div>
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:font-normal duration-150">
          <Link href="/contact">Contact</Link>
        </div>
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:font-normal duration-150">
          <Link href="/projects">Projects</Link>
        </div>
      </div>
    </div>
  );
}
