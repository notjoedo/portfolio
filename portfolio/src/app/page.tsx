import Image from "next/image";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <div className="relative rounded-full border-2 border-[#A3B18A] shadow-sm shadow-[#DAD7CD] overflow-hidden">
        <Image
          className="rounded-full"
          src="/me.png"
          width={400}
          height={400}
          alt="Joe"
        />
      </div>
      <div className="flex justify-between pt-10 tracking-wide text-4xl text-[#DAD7CD] font-extralight">
        <h1>Hello, my name is Joe</h1>
      </div>
      <Footer />
    </div>
  );
}
