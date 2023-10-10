"use client"; // th
import Image from 'next/image';
import ReactPlayer from 'react-player'
import Link from 'next/link';
import { useState } from 'react';
import Slider from './slider';



export default function Hero() {
    return (
    <div className='mt-10'>
    <div className="hero">
        <div className=''>
            <video autoPlay muted loop className='hero-video'>
            <source src="https://res.cloudinary.com/digital-cats/video/upload/v1680749089/DigitalEthics/blue_and_cream_creative_opener_video__1_l6l1qk.mp4" />
                {/* <source src="https://makeagency.co.uk/wp-content/uploads/2023/01/MAKE-SHOWREEL-PREVIEW.mp4" /> */}
            </video>
        </div>
        {/* overlay */}
        <div className='opacity-60 w-full h-full bg-black'>
       
        <div className="container hero-content  mx-auto flex absolute flex-col items-center py-12 sm:py-24">
            <div className="w-full mt-6 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                <span className='text-5xl sm:text-6xl md:text-6xl lg:text-9xl  text-center  outline-text font-black'>
                    <h1 className=" xl:text-9xl lg:text-8xl">
                    Marketing ally
                    </h1>
                    <h1 className="xl:text-9xl lg:text-8xl" >
                        WITH A PASSION
                    </h1>
                </span><span className="text-white">
                    <h1 className=" text-center font-black xl:text-9xl lg:text-8xl" >
                        FOR MARKETING
                    </h1></span>
            </div>
            <div className="w-full flex mt-2 justify-center items-center">
                <span className=''> 
                <a href="#contactus" >
                <button className=" transition duration-150 ease-in-out lg:text-xl lg:font-bold   text-lime-400 px-4 sm:px-10 border-4 border-lime-400 py-2 sm:py-4 text-sm"> Get In Touch</button>
               </a>
               <a href="#services" className='mb-3'>
                <button className="ml-4 transition duration-150 ease-in-out  lg:text-xl lg:font-bold  text-white px-4 sm:px-10 border-4 border-white py-2 sm:py-4 text-sm">About Us</button>
               </a> {/* <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 bg-transparent transition duration-150 ease-in-out hover:border-green-600 lg:text-xl lg:font-bold  hover:text-green-600 rounded border border-green-700 text-green-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">About Us</button> */}
            </span>
            </div>

            {/* logos scroll */}
            
            <div>
            <Slider/>
            </div>
        </div>
        </div>
    </div>
    </div>
    )


}