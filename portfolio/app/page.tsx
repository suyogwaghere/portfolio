/* eslint-disable jsx-a11y/alt-text */
"use client";
import "dotenv/config";
import { useRef, useState } from "react";
import {
  AiFillBehanceSquare,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";

import emailjs from "@emailjs/browser";
import Image from "next/image";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import design from "../public/design.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [clicked, setclicked] = useState(false);
  const [showLatestPosts, setShowLatestPosts] = useState(true);
  const handleLatestPostsClick = () => {
    setShowLatestPosts(true);
  };

  const handleAllPostsClick = () => {
    setShowLatestPosts(false);
  };

  const formRef = useRef("0");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_sYOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={darkMode ? " " : "dark"}>
      <main className=" dark:bg-gray-900	">
        <section className="min-h-screen snap-start bg-hero-light bg-cover bg-fixed px-10 dark:bg-hero-dark md:px-20 lg:px-40">
          <nav className=" mb-12 flex justify-between py-10 dark:text-white">
            <h1 className="font-Roboto_Slab text-5xl font-extrabold transition-transform hover:scale-105 dark:text-black">
              SW
            </h1>
            <ul className="flex items-center">
              <li className="transition-transform hover:scale-125">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer"
                />
              </li>
              <li className="transition-transform hover:scale-110">
                <a
                  className="ml-8 rounded-md  bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="p-10 text-center">
            <h2 className="py-2 font-Montserrat text-5xl font-bold text-white">
              Suyog Waghere
            </h2>
            {/* <h3 className='text-2xl py-2'>Developer.</h3> */}
            <p className="py-5 text-xl font-semibold leading-8 text-white ">
              Full Stack Developer | Specializing in Crafting Customized Dynamic
              Web Solutions | Proficient in React JS • Angular • Node.js •
              ExpressJS • REST APIs | Extensive Experience with Firebase,
              MongoDB, and SQLite
            </p>
          </div>
          <div className="py03 flex   justify-center gap-16 text-5xl text-white drop-shadow-xl dark:text-white">
            <AiFillTwitterSquare />
            <AiFillLinkedin />
            <AiFillInstagram />
            <AiFillBehanceSquare />
          </div>
        </section>
        <section className="snap-start px-10 md:px-20 lg:px-40">
          <div>
            <h3 className="pb-2 pt-5 text-center text-5xl  dark:text-white">
              Services I offer
            </h3>
            <p className="text-md leading-8 text-gray-800  dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="gap-10 lg:flex">
            <div className="card my-10 flex-1 rounded-xl p-10 text-center  shadow-lg dark:bg-white">
              <Image
                className="card_image mx-auto"
                src={design}
                width={100}
                height={100}
                alt={""}
              />
              <h3 className="pb-2 pt-8 text-lg font-medium  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="py-1 text-gray-800">Photoshop</p>
              <p className="py-1 text-gray-800">Illustrator</p>
              <p className="py-1 text-gray-800">Figma</p>
              <p className="py-1 text-gray-800">Indesign</p>
            </div>
            <div className="card my-10 flex-1 rounded-xl p-10 text-center  shadow-lg dark:bg-white">
              <Image
                className="card_image mx-auto"
                src={consulting}
                width={100}
                height={100}
                alt={""}
              />
              <h3 className="pb-2 pt-8 text-lg font-medium  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="py-1 text-gray-800">Photoshop</p>
              <p className="py-1 text-gray-800">Illustrator</p>
              <p className="py-1 text-gray-800">Figma</p>
              <p className="py-1 text-gray-800">Indesign</p>
            </div>
            <div className="card my-10 flex-1 rounded-xl p-10 text-center  shadow-lg dark:bg-white">
              <Image
                className="card_image mx-auto"
                src={code}
                width={100}
                height={100}
                alt={""}
              />
              <h3 className="pb-2 pt-8 text-lg font-medium  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="py-1 text-gray-800">Photoshop</p>
              <p className="py-1 text-gray-800">Illustrator</p>
              <p className="py-1 text-gray-800">Figma</p>
              <p className="py-1 text-gray-800">Indesign</p>
            </div>
          </div>
        </section>
        <section className="snap-start px-10 md:px-20 lg:px-40">
          <div>
            <h3 className="pb-2 pt-5 text-center text-5xl dark:text-white">
              Portfolio
            </h3>
            {/* <p className="text-md leading-8 text-gray-800  dark:text-white">
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
            </p> */}
          </div>
          <div className="flex justify-start gap-5 pt-5 text-white ">
            <button
              className={
                !showLatestPosts
                  ? "mr-2 rounded-xl border-2 border-gray-900 bg-white px-4 py-2 text-gray-900 transition-transform hover:scale-105 dark:border-2   dark:border-white dark:bg-gray-900 dark:text-white  "
                  : "mr-2 rounded-xl border-2 border-white bg-gray-900 px-4 py-2 text-white transition-transform hover:scale-105 dark:border-2   dark:border-gray-900 dark:bg-white dark:text-gray-900"
              }
              onClick={handleLatestPostsClick}
            >
              Featured
            </button>
            <button
              className={
                showLatestPosts
                  ? "rounded-xl border-2 border-gray-900 bg-white px-4 py-2 text-gray-900 transition-transform hover:scale-105 dark:border-2 dark:border-white dark:bg-gray-900 dark:text-white "
                  : "rounded-xl border-2 border-white bg-gray-900 px-4 py-2 text-white transition-transform hover:scale-105 dark:border-2 dark:border-gray-900 dark:bg-white dark:text-gray-900"
              }
              onClick={handleAllPostsClick}
            >
              All Posts
            </button>
          </div>
          <div id="latest-posts" className={showLatestPosts ? "" : "hidden"}>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="flex-1 basis-1/3 ">
                <Image
                  className="rounded-lg object-cover transition-transform hover:scale-105"
                  width={100}
                  height={100}
                  layout="responsive"
                  src={web1}
                  alt={""}
                />
              </div>
              <div className="flex-1 basis-1/3">
                <Image
                  className="rounded-lg object-cover transition-transform hover:scale-105"
                  width={100}
                  height={100}
                  layout="responsive"
                  src={web2}
                  alt={""}
                />
              </div>
              <div className="flex-1 basis-1/3">
                <Image
                  className="rounded-lg object-cover transition-transform hover:scale-105"
                  width={100}
                  height={100}
                  layout="responsive"
                  src={web3}
                  alt={""}
                />
              </div>
            </div>
          </div>
          <div id="all-posts" className={showLatestPosts ? "hidden" : ""}>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="flex-1 basis-1/3 ">
                <Image
                  className="rounded-lg object-cover transition-transform hover:scale-105"
                  width={100}
                  height={100}
                  layout="responsive"
                  src={web1}
                  alt={""}
                />
              </div>
              <div className="flex-1 basis-1/3">
                <Image
                  className="rounded-lg object-cover transition-transform hover:scale-105"
                  width={100}
                  height={100}
                  layout="responsive"
                  src={web2}
                  alt={""}
                />
              </div>
              <div className="flex-1 basis-1/3">
                <Image
                  className="rounded-lg object-cover transition-transform hover:scale-105"
                  width={100}
                  height={100}
                  layout="responsive"
                  src={web3}
                  alt={""}
                />
              </div>
              <div className="flex-1 basis-1/3">
                <Image
                  className="rounded-lg object-cover transition-transform hover:scale-105"
                  width={100}
                  height={100}
                  layout="responsive"
                  src={web4}
                  alt={""}
                />
              </div>
              <div className="flex-1 basis-1/3">
                <Image
                  className="rounded-lg object-cover transition-transform hover:scale-105"
                  width={100}
                  height={100}
                  layout="responsive"
                  src={web5}
                  alt={""}
                />
              </div>
              <div className="flex-1 basis-1/3">
                <Image
                  className="rounded-lg object-cover transition-transform hover:scale-105"
                  width={100}
                  height={100}
                  layout="responsive"
                  src={web6}
                  alt={""}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="snap-start  px-10 py-10  md:px-20 lg:px-40">
          <div className="py-10">
            <h3 className="pb-2 pt-5 text-center text-5xl dark:text-white">
              Contact Us
            </h3>
          </div>
          <div className="flex justify-center">
            <form
              className="flex w-1/2 flex-col gap-3"
              ref={formRef}
              onSubmit={sendEmail}
            >
              <label></label>
              <input
                className="rou mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-600 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                type="text"
                name="user_name"
                placeholder="Name"
              />
              <label></label>
              <input
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-600   shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                type="email"
                name="user_email"
                placeholder="Email"
              />
              <label></label>
              <textarea
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-600 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                name="message"
                placeholder="Message"
              />

              <input
                className="w-1/2 justify-center rounded-md border border-slate-300 bg-white"
                type="submit"
                value="Send"
              />
            </form>
          </div>
        </section>
        <section>
          <div className="container">
            <figure className="card">
              <Image src={code} alt="no image" className="card-img" />
              <figcaption className="card-title"> Hero</figcaption>
            </figure>
          </div>
          <div className="rounded-sm">
            <div className="max-w-md"></div>
          </div>
          <div className="py-5">
            <div className="rounded-sm border bg-slate-400 text-justify"></div>
          </div>
        </section>
      </main>
    </div>
  );
}
