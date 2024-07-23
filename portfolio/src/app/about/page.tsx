import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="relative overflow-hidden rounded-full border-2 border-[#A3B18A] shadow-sm shadow-[#DAD7CD]">
          <Image
            className="rounded-full"
            src="/me.png"
            width={300}
            height={300}
            alt="Joe"
          />
        </div>
      </div>
    </div>
  );
}
