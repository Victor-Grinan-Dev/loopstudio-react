import React from "react";
import Image from "../functions/Image";

const d = new Date();

const Footer = () => {
  return (
    <footer id="footer w-full">
      <div className="py-10 mx-auto bg-black w-full">
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            <div className="logo h-8">
              <Image name="logo" type="icon" classes="w-44 md:ml-3" />
            </div>
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              <div className="h-10 group">
                <a href="/">
                  About
                  <div className="mx-2 group-hover:border-b group hover:border-blue-50"></div>
                </a>
              </div>
              <div className="h-10 group">
                <a href="/">
                Carrers
                  <div className="mx-2 group-hover:border-b group hover:border-blue-50"></div>
                </a>
              </div>
              <div className="h-10 group">
                <a href="/">
                Product
                  <div className="mx-2 group-hover:border-b group hover:border-blue-50"></div>
                </a>
              </div>
              <div className="h-10 group">
                <a href="/">
                Support
                  <div className="mx-2 group-hover:border-b group hover:border-blue-50"></div>
                </a>
              </div>
              <div className="h-10 group">
                <a href="/">
                Events
                  <div className="mx-2 group-hover:border-b group hover:border-blue-50"></div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between space-y-4-tex-gray-500">
            <div className="flex items-center w-full justify-center space-x-4 md:justify-end md:mx-0">
                <div className="h-8 group">
                    <a href="/">
                        <Image name="facebook" type="icon" classes="" />
                    </a>
                </div>
                <div className="h-8 group">
                    <a href="/">
                        <Image name="twitter" type="icon" classes="" />
                    </a>
                </div>
                <div className="h-8 group">
                    <a href="/">
                        <Image name="pinterest" type="icon" classes="" />
                    </a>
                </div>
                <div className="h-8 group">
                    <a href="/">
                        <Image name="instagram" type="icon" classes="" />
                    </a>
                </div>
            </div>

            <div className="text-gray-500 mt-4">
                &copy; {d.getFullYear()} Loopstudios.All rights reserved
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
