import { AiOutlineHome, AiOutlineMenu ,AiOutlineProject, AiOutlineMail} from "react-icons/ai";
import {BsPerson} from "react-icons/bs"
import { GrProjects } from "react-icons/gr";
import { useState } from "react";
const SideNav = () => {
  const [nav, setNav] = useState();
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <AiOutlineMenu
        size={25}
        className="absolute top-4 right-4 z-[99] md:hidden cursor-pointer"
        onClick={handleNav}
      />
      {nav ? (
        <div className="flex items-center justify-center">
          <div className="bg-white/90">
            <div className="flex flex-row mt-[50%] hover:scale-105 ease-in duration-100">
              <div className="w-fit flex justify-start items-start rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer ">
                <div>
                  <a href="/main">
                    <AiOutlineHome size={20} />
                  </a>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer ">
                <div>
                  <a href="/main">
                    <span className=" ">Home</span>
                  </a>
                </div>
              </div>
            </div>
            <div className=" flex flex-row items-center z-20 hover:scale-105 ease-in duration-100">
              <div className="w-fit flex justify-start items-start rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer ">
                <a href="/main" className="">
                  <GrProjects size={20} />
                </a>
              </div>
              <div className="w-full flex flex-col items-center justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer ">
                <div>
                  <a href="/main">
                    <span className=" ">Work</span>
                  </a>
                </div>
              </div>
            </div>
            <div className=" flex flex-row  z-20 hover:scale-105 ease-in duration-100">
              <div className="w-fit flex justify-start items-start rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer ">
                <a href="/main" className="">
                  <AiOutlineProject size={20} />
                </a>
              </div>
              <div className="w-full flex flex-col items-center justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer ">
                <div>
                  <a href="/main">
                    <span className=" ">Projects</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-row z-20 hover:scale-105 ease-in duration-100">
              <div className="w-fit flex justify-start items-start rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer ">
                <a href="/main" className="">
                  <BsPerson size={20} />
                </a>
              </div>
              <div className="w-full flex flex-col items-center justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer">
                <div>
                  <a href="/main">
                    <span className=" ">Resume</span>
                  </a>
                </div>
              </div>
            </div>
            <div className=" flex flex-row  z-20 hover:scale-105 ease-in duration-100">
              <div className="w-fit flex justify-start items-start rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer ">
                <a href="/main" className="">
                  <AiOutlineMail size={20} />
                </a>
              </div>
              <div className="w-full flex flex-col items-center justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer">
                <div>
                  <a href="/main">
                    <span className=" ">Contact</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="md:block hidden fixed top-[25%] right-0 z-10">
        <div className="flex flex-col">
          <a href="#main"className="rounded-full shadow-lg bg-white m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-100">
            <AiOutlineHome size={20}/>
          </a>
          <a href="#work"className="rounded-full shadow-lg bg-white m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-100">
            <GrProjects size={20}/>
          </a>
          <a href="#project"className="rounded-full shadow-lg bg-white m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-100">
            <AiOutlineProject size={20}/>
          </a>
          <a href="#resume" className="rounded-full shadow-lg bg-white m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-100">
            <BsPerson size={20}/>
          </a>
          <a href="#contact"className="rounded-full shadow-lg bg-white m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-100">
            <AiOutlineMail size={20}/>
          </a>
        </div>
      </div>
    </>
  );
};
export default SideNav;
