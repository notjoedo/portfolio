import Image from "next/image";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="mt-36 flex flex-col items-center justify-center">
      <div className="relative overflow-hidden rounded-full border-2 border-[#A3B18A] shadow-sm shadow-[#DAD7CD]">
        <Image
          className="rounded-full"
          src="/me.png"
          width={400}
          height={400}
          alt="Joe"
        />
      </div>
      <div className="flex justify-between pt-10 text-4xl font-extralight tracking-wide text-[#DAD7CD]">
        <h1>Hello, my name is Joe</h1>
      </div>
      <Footer />
    </div>
  );
}
