"use client"; // th
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import InfoTab from './tabs';


export default function Hero() {
  return (
    <div className="landing-page mb-[0.5rem]">
      <section className="hero h-screen bg-primary-dark flex flex-col relative items-center justify-center">
        <div className="hero-image  ">
          <Image
            src="/main3.jpg"
            alt="A diverse group of people smiling and laughing together"
            fill={true}
            style={{ objectFit: "cover" }} priority={true} quality={100}
          />
        </div>
        <span className='absolute top-[55%]  px-3 flex flex-col p-5'>
          <h1 className=" text-6xl   tracking-tighter leading-none font-bold text-white">{`Originally.\nBlack`}</h1>
          <p className="text-3xl mt-4 tracking-tight leading-none  shadow-md text-white">Embark on a Journey of Discovery and Empowerment</p>
        </span>
      </section>

      <section className=" h-screen flex flex-col   items-center justify-evenly">
        <div className=' flex flex-col px-4 text-center items-center'>
          <h2 className=" text-5xl font-bold  text-black pb-5">Uncover the Brilliance of Black Entrepreneurs</h2>
          <p className="text-gray-700 w-auto px-5 lg:w-1/2">Originally.Black is more than an app; We connects you with the vibrant tapestry of Black Entrepreneurs that enrich your communities.</p></div>
        <div className=" flex items-center mt-2 flex-row overflow-x-auto overflow-y-hidden sm:overflow-x-scroll  no-scrollbar ">
          <InfoTab src={"/lady-min.jpg"} alt={"A bowl of delicious soul food"} title={"Discover Hidden Gems"} infor={"Find Events, Authentic cuisine, Unique fashion, and more."} />
          <InfoTab src={"/shopphone.jpg"} alt={"A person browsing a smartphone"} title={"Unlock Exclusive Coupons"} infor={"Discover a treasure trove of exclusive coupons and deals right on O.B"} />
          <InfoTab src={"/entreprenuer.jpg"} alt={"A laptop screen displaying a thriving online store"} title={"Empower New Entrepreneurs"} infor={"Support Entrepreneurs and join their success stories"} />
          <InfoTab src={"/smartpeopls.jpg"} alt={"A group of Black entrepreneurs talking and laughing"} title={"Amplify Black Voices"} infor={"Celebrate the rich heritage behind each entrepreneurs."} />
          <InfoTab src={"/charity-min.jpg"} alt={"man tending a farm in the caribbean"} title={"Charity and Faith "} infor={"Invest in the economic empowerment of Black communities."} />

        </div>
        <div className="flex flex-col gap-1 py-3 mt-3 items-center w-full shadow-md justify-center">
          <h2 className='uppercase text-center font-medium text-lg px-10'>{`Are you an Entreprenuer? Showcase Your Excellence`}</h2>
          <Link className='cursor-pointer  hover:text-purple-500 mt-3 ' href="https://business.originally.black">
            <button className="button hover:underline text-sm underline-offset-2">Join Originally.Black!</button>
          </Link>
        </div>
      </section>

      {/* <section className="flex flex-col  items-center justify-center">
        <h2>Are you an Entreprenuer ? Showcase Your Excellence</h2>
        <Link href="/download">
          <button className="button">Join Originally.Black</button>
        </Link>
      </section> */}
    </div>

  )
}


