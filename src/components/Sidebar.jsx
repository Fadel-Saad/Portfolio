/* eslint-disable react/prop-types */
import { IoMenu, IoGridOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { TiMessage } from "react-icons/ti";
import { useState } from "react";
// import Hero from "./Hero";
// import About from "./About";
// import ProjectCard from "./ProjectCard";
// import Skills from "./Skills";
// import ContactMe from "./ContactMe";

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function triggerSideBar() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className=" relative min-h-screen">
      <button
        onClick={triggerSideBar}
        className="fixed md:hidden top-4 left-4 inline-block"
      >
        <IoMenu size={20} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={triggerSideBar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-base-200 z-40 p-4 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={triggerSideBar}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          ×
        </button>

        <nav className="mt-16 ml-5">
          <ul className="space-y-4">
            <li className="flex gap-3 items-center">
              <IoMdInformationCircleOutline size={20} />
              <a
                href="#About"
                onClick={triggerSideBar}
                className="text-lg font-medium"
              >
                About
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <IoGridOutline size={20} />
              <a
                href="#Projects"
                onClick={triggerSideBar}
                className="text-lg font-medium"
              >
                Projects
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <FaCode size={20} />
              <a
                href="#Skills"
                onClick={triggerSideBar}
                className="text-lg font-medium"
              >
                Skills
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <TiMessage size={20} />
              <a
                href="#Contact"
                onClick={triggerSideBar}
                className="text-lg font-medium"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      {children}
    </div>
  );
}

export default Sidebar;
