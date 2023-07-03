import { BsFillMoonStarsFill } from 'react-icons/bs'
import Image from "next/image";
import design from '../public/design.png'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube, AiOutlineAntDesign} from 'react-icons/ai'
export default function Home() {
  return (
    <main className="bg-white px-10 ">
      <section className=" min-h-screen">
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-roboto'>Suyog Waghere</h1>
          <ul className='flex items-center'>
          <li><BsFillMoonStarsFill className='cursor-pointer'/></li>
          <li><a className='text-white bg-gradient-to-r from-cyan-500 to-teal-500 py-2 px-4 rounded-md ml-8' href="#">Resume</a></li>

          </ul></nav>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium'>Suyog Waghere</h2>
          {/* <h3 className='text-2xl py-2'>Developer.</h3> */}
          <p className='text-md py-5 leading-8 text-gray-800'>
            Full Stack Developer | Specializing in Crafting Customized Dynamic Web Solutions | Proficient in React JS • Angular • Node.js • ExpressJS • REST APIs | Extensive Experience with Firebase, MongoDB, and SQLite
          </p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py03 text-gray-600'>
          <AiFillTwitterCircle/>
          <AiFillLinkedin/>
          <AiFillYoutube/>
        </div>
      </section>
      <section>
        <div>

        <h3 className='text-3xl py-1'>Services I offer</h3>
        <p className='text-md leading-8 text-gray-800'>asdfsdff</p>
        </div>
        <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt={''} />
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
    </main>
  )
}
