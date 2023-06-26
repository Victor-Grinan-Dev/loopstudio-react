import React from 'react'
import Image from '../functions/Image'

const Creations = () => {
  return (
    <section id='creations'>
        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
            <div className="flex justify-center mb-20 md:justify-between">
                <h2 className="text-3xl text-center uppercase md:text-left md:text-5xl">
                    Our Creations
                </h2>
                <button className=" hidden md:block">
                    see all
                </button>
            </div>

            <div className="items-container">
                <div className="group relative overflow-hidden md:w-1/4">
                    {/* destop image: */}
                    <Image name="earth" type="desktop" classses="w-full" />
                    {/* mobile image: */}
                    <Image name="earth" type="mobile" classses="w-full" />
                    <div className="gradient absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 grop-hover:from-gray-50 group-hover:to-white group-hover:opacity-70 duration-200"></div>
                    <h5 className="absolute px-6 duration-200 w52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                        Deep Earth
                    </h5>
                </div>

                <div className="group relative overflow-hidden md:w-1/4">
                    {/* destop image: */}
                    <Image name="curiosity" type="desktop" classses="w-full" />
                    {/* mobile image: */}
                    <Image name="curiosity" type="mobile" classses="w-full" />
                    <div className="gradient absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 grop-hover:from-gray-50 group-hover:to-white group-hover:opacity-70 duration-200"></div>
                    <h5 className="absolute px-6 duration-200 w52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                    curiosity
                    </h5>
                </div>

                <div className="group relative overflow-hidden md:w-1/4">
                    {/* destop image: */}
                    <Image name="fisheye" type="desktop" classses="w-full" />
                    {/* mobile image: */}
                    <Image name="fisheye" type="mobile" classses="w-full" />
                    <div className="gradient absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 grop-hover:from-gray-50 group-hover:to-white group-hover:opacity-70 duration-200"></div>
                    <h5 className="absolute px-6 duration-200 w52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                        fisheye
                    </h5>
                </div>

                <div className="group relative overflow-hidden md:w-1/4">
                    {/* destop image: */}
                    <Image name="grid" type="desktop" classses="w-full" />
                    {/* mobile image: */}
                    <Image name="grid" type="mobile" classses="w-full" />
                    <div className="gradient absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 grop-hover:from-gray-50 group-hover:to-white group-hover:opacity-70 duration-200"></div>
                    <h5 className="absolute px-6 duration-200 w52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                        grid
                    </h5>
                </div>
            </div>

            <div className="items-container">
                <div className="group relative overflow-hidden md:w-1/4">
                    {/* destop image: */}
                    <Image name="above" type="desktop" classses="w-full" />
                    {/* mobile image: */}
                    <Image name="above" type="mobile" classses="w-full" />
                    <div className="gradient absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 grop-hover:from-gray-50 group-hover:to-white group-hover:opacity-70 duration-200"></div>
                    <h5 className="absolute px-6 duration-200 w52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                        above
                    </h5>
                </div>

                <div className="group relative overflow-hidden md:w-1/4">
                    {/* destop image: */}
                    <Image name="nightArcade" type="desktop" classses="w-full" />
                    {/* mobile image: */}
                    <Image name="nightArcade" type="mobile" classses="w-full" />
                    <div className="gradient absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 grop-hover:from-gray-50 group-hover:to-white group-hover:opacity-70 duration-200"></div>
                    <h5 className="absolute px-6 duration-200 w52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                       night arcade
                    </h5>
                </div>

                <div className="group relative overflow-hidden md:w-1/4">
                    {/* destop image: */}
                    <Image name="borealis" type="desktop" classses="w-full" />
                    {/* mobile image: */}
                    <Image name="borealis" type="mobile" classses="w-full" />
                    <div className="gradient absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 grop-hover:from-gray-50 group-hover:to-white group-hover:opacity-70 duration-200"></div>
                    <h5 className="absolute px-6 duration-200 w52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                        borealis
                    </h5>
                </div>

                <div className="group relative overflow-hidden md:w-1/4">
                    {/* destop image: */}
                    <Image name="soccer" type="desktop" classses="w-full" />
                    {/* mobile image: */}
                    <Image name="soccer" type="mobile" classses="w-full" />
                    <div className="gradient absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 grop-hover:from-gray-50 group-hover:to-white group-hover:opacity-70 duration-200"></div>
                    <h5 className="absolute px-6 duration-200 w52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                        soccer
                    </h5>
                </div>
            </div>
        </div>

        <div className="flex justify-center mt-10 mb-10 mx-6 md:hidden">
            <button className="btn w-full md:hidden">see all</button>
        </div>
    </section>
  )
}

export default Creations