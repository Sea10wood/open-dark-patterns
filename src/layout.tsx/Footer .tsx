import Image from "next/image";
import Logo from "../../public/favicon.ico";
import React from "react";

const Footer = () => {
  return (
    <footer className=" dark:bg-gray-900 bg-gray-700 py-6 lg:py-8">
      <div className="p-4">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="" className="flex items-center">
              <Image
                src={Logo}
                className="h-8"
                alt="Logo"
                width={50}
                height={50}
                style={{ marginRight: "0.75rem" }}
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Open Dark Patterns
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div style={{ marginLeft: "160px" }}>
              <h2 className="mb-6 text-lx font-bold text-gray-900 uppercase dark:text-white ">
                Contents
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium text-sm "style={{ marginLeft: "5px" }} >
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    Figma
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="ml-8">
                <h2 className="mb-6 text-lx font-bold text-gray-900 uppercase dark:text-white">
                  Contact
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium text-sm" style={{ marginLeft: "5px" }} >
                  <li className="mb-4">
                    <a href="#" className="hover:underline ">
                      Github
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div></div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
