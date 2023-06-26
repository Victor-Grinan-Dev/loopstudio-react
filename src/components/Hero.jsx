import React from 'react';
import Image from '../functions/Image';
import HamburgerMenu from './HamburgerMenu';
import Collapse from './Collapse';
import { useState } from 'react';
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <section className='hero' id='hero'>
        <div className="container max-w-6xl mx-auto px-6 py-12">
            <nav className="nav-logo-container flex item-center justify-between font-bold text-white">
              <Image type="icon" name="logo" classes=""/>
              <div className="hidden h-10 font-alata md:flex md:space-x-8">
                <div className="group">
                  <a href="/">
                    About
                    <div className="mx-2 group-hover:border-b group hover:border-blue-50"></div>
                  </a>
                </div>
                <div className="group">
                  <a href="/">
                    Carrers
                    <div className="mx-2 group-hover:border-b group hover:border-blue-50"></div>
                  </a>
                </div>
                <div className="group">
                  <a href="/">
                    Product
                    <div className="mx-2 group-hover:border-b group hover:border-blue-50"></div>
                  </a>
                </div>
                <div className="group">
                  <a href="/">
                    Support
                    <div className="mx-2 group-hover:border-b group hover:border-blue-50"></div>
                  </a>
                </div>
                <div className="group">
                  <a href="/">
                    Events
                    <div className="mx-2 group-hover:border-b group hover:border-blue-50"></div>
                  </a>
                </div>
              </div>
               {/* HAMBURGER MENU BTN*/}
               <HamburgerMenu isOpen={isOpen} fx={toggle}/>
            </nav>
           {/* Mobile menu */}
           <Collapse isOpen={isOpen} />
           <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-3xl text-white uppercase border-2 md:p-10 md:m32 md:mx-0 md:text-6xl">Impressive Experiences that deliver</div>
        </div>
    </section>
  )
}

export default Hero;