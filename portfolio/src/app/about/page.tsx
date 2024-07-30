import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export default async function About() {
  return (
    <div className="flex flex-col m-10 p-10 justify-center items-center">
      <div className="flex flex-col lg:flex-row md:space-y-10 lg:space-y-0 items-center">
        <div className="justify-center items-center relative overflow-hidden rounded-full border-2 border-[#A3B18A] shadow-sm shadow-[#DAD7CD] mb-6 md:mb-0 flex-shrink-0">
          <Image
            className="rounded-full"
            src="/me.png"
            width={250}
            height={250}
            alt="Joe"
            priority={true}
          />
        </div>
        <div className="flex-row text-center md:text-left">
          <h1
            className="animate-typeonce overflow-hidden border-r-4 border-r-white px-4 sm:px-10 lg:text-xl text-sm sm:text-base font-light 
          text-[#DAD7CD] leading-6 sm:leading-8 lg:leading-10 break-words whitespace-normal md:whitespace-nowrap"
          >
            I'm a student majoring in Computational Modeling & Data Analytics
            <br />
            and minoring in Computer Science at Virginia Tech! <br />
            I'm always exploring new tech and looking to level up my skills.{" "}
            <br />
            Thanks for taking a moment to get to know me!
          </h1>
        </div>
      </div>
      <div className="flex justify-start items-center bg-[#A3B18A] rounded-lg mt-20 drop-shadow-lg md:w-full">
        <TabGroup className={"p-5 lg:space-y-10 "}>
          <TabList className="flex flex-row space-x-10 font-bold text-2xl md:text-3xl tracking-[-0.05em] lg:mr-32 lg:pr-52">
            <Tab
              className={
                "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150"
              }
            >
              TECHSTACK
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
            <TabPanel className={"mt-5"}>
              <div
                className="flex flex-col md:flex-row justify-center md:justify-start md:flex-wrap items-center md:items-center 
              space-y-20 md:space-y-5 xl:space-y-0 md:space-x-10 px-5 pb-5"
              >
                <Image
                  src={"/html-icon.svg"}
                  alt="html"
                  width="100"
                  height="100"
                />
                <Image src={"/css.svg"} alt="next" width="100" height="100" />
                <Image
                  src={"/nextjs.svg"}
                  alt="next"
                  width="100"
                  height="100"
                />
                <Image
                  src={"/astro-logo-icon.webp"}
                  alt="astro"
                  width="100"
                  height="100"
                />
                <Image
                  src={"/tailwind-css.svg"}
                  alt="tailwind"
                  width="100"
                  height="100"
                />
                <Image
                  src={"/javascript.svg"}
                  alt="javascript"
                  width="100"
                  height="100"
                />
                <Image
                  src={"/react.webp"}
                  alt="react"
                  width="100"
                  height="100"
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div
                className="flex flex-col md:flex-row justify-center md:justify-start md:flex-wrap items-center md:items-center 
              space-y-20 md:space-y-5 xl:space-y-0 md:space-x-10 px-5 pb-5"
              >
                <Image
                  src={"/frontend.png"}
                  alt="react"
                  width="100"
                  height="100"
                />
                <Image
                  src={"/backend.png"}
                  alt="react"
                  width="100"
                  height="100"
                />
                <Image
                  src={"/weightlifting.webp"}
                  alt="react"
                  width="100"
                  height="100"
                />
                <Image
                  src={"/games.png"}
                  alt="react"
                  width="100"
                  height="100"
                />
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
