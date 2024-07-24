import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export default function About() {
  return (
    <div className="flex flex-col m-10 p-10 justify-center items-center">
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
         px-10 text-xl font-light text-[#DAD7CD] leading-10"
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
      <div className="flex justify-start items-center bg-[#A3B18A] rounded-lg mt-20 drop-shadow-lg w-full">
        <TabGroup className={"p-5 space-y-10"}>
          <TabList className="space-x-10 font-bold text-3xl tracking-[-0.05em] mr-32 pr-52">
            <Tab
              className={
                "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150"
              }
            >
              TECH STACK
            </Tab>
            <Tab
              className={
                "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150"
              }
            >
              EXPERIENCE
            </Tab>
            <Tab
              className={
                "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150"
              }
            >
              HOBBIES
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="flex flex-row px-5 pb-5 space-x-10">
                <Image
                  src={"/nextjs.svg"}
                  alt="next"
                  width="100"
                  height="100"
                />
                <Image
                  src={"/astro-logo-icon.webp"}
                  alt="next"
                  width="100"
                  height="100"
                />
                <Image src={"/css.svg"} alt="next" width="100" height="100" />
                <Image
                  src={"/html-icon.svg"}
                  alt="next"
                  width="88"
                  height="88"
                />
              </div>
            </TabPanel>
            <TabPanel>Content 2</TabPanel>
            <TabPanel>Content 3</TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
