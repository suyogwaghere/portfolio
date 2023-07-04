/* eslint-disable jsx-a11y/alt-text */
"use client"; // This is a client component 👈🏽
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineAntDesign,
} from "react-icons/ai";
import Image from "next/image";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import code from "../public/code.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? " " : "dark"}>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-roboto">Suyog Waghere</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer"
                />
              </li>
              <li>
                <a
                  className="text-white bg-gradient-to-r from-cyan-500 to-teal-500 py-2 px-4 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Suyog Waghere
            </h2>
            {/* <h3 className='text-2xl py-2'>Developer.</h3> */}
            <p className="text-md py-5 leading-8 text-gray-800  dark:text-white">
              Full Stack Developer | Specializing in Crafting Customized Dynamic
              Web Solutions | Proficient in React JS • Angular • Node.js •
              ExpressJS • REST APIs | Extensive Experience with Firebase,
              MongoDB, and SQLite
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py03 text-gray-600  dark:text-white">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1  dark:text-white">Services I offer</h3>
            <p className="text-md leading-8 text-gray-800  dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image
                className="mx-auto"
                src={design}
                width={100}
                height={100}
                alt={""}
              />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image
                className="mx-auto"
                src={consulting}
                width={100}
                height={100}
                alt={""}
              />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image
                className="mx-auto"
                src={code}
                width={100}
                height={100}
                alt={""}
              />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1  dark:text-white">Portfolio</h3>
            <p className="text-md leading-8 text-gray-800  dark:text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters
            </p>
            <p className="text-md leading-8 text-gray-800  dark:text-white">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there anything embarrassing hidden in the middle
              of text.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"
                src={web1}
                alt={""}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"
                src={web2}
                alt={""}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"
                src={web3}
                alt={""}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"
                src={web4}
                alt={""}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"
                src={web5}
                alt={""}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"
                src={web6}
                alt={""}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
