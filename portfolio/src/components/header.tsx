import Link from "next/link";

export default function Header() {
  return (
    <div className="p-5 tracking-[-0.10em] text-3xl text-[#DAD7CD] font-extralight flex justify-between">
      <div>
        <Link href="/">Home</Link>
      </div>
      <div className="space-x-5">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </div>
  );
}
