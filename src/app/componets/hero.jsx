"use client"; // th
import Image from 'next/image';
import ReactPlayer from 'react-player'
import Link from 'next/link';
import { useState } from 'react';
import Slider from './slider';
import Grid from './grid';
import origins from '@/app/utils/origins';
import React from 'react';
import InfoTab from './tabs';


export default function Hero() {
  return (
    <div className="landing-page mb-5">
      <section className="hero h-screen bg-primary-dark flex flex-col relative items-center justify-center">
        <div className="hero-image  ">
          <Image
            src="/diversegroup.jpg"
            alt="A diverse group of people smiling and laughing together"
            fill={true}
            style={{ objectFit: "cover" }} priority={true}
          />
        </div>
        <span className='absolute flex flex-col p-5'>
          <h1 className=" text-6xl font-bold text-white">Originally </h1> <h1 className=" text-6xl font-bold text-white">Black</h1>
          <p className="text-3xl text-white">Embark on a Journey of Discovery and Empowerment</p>
        </span>
      </section>

      <section className=" h-screen flex flex-col pt-3 pb-8 mb-18 items-center justify-evenly">
        <div className=' flex flex-col px-4 text-center items-center'>
          <h2 className=" text-5xl font-bold  text-black pb-5">Uncover the Brilliance of Black Entrepreneurs</h2>
          <p className="text-gray-700 w-auto px-5 lg:w-1/2">Originally.Black is more than an app; it's a movement that connects you with the vibrant tapestry of Black Entrepreneurs that enrich our communities.</p></div>
        <div className=" flex items-center  flex-row overflow-x-auto no-scrollbar ">
          <InfoTab src={"/soulfood.jpg"} alt={"A bowl of delicious soul food"} title={"Discover Hidden Gems"} infor={"Find authentic cuisine, unique fashion, and more."} />
          <InfoTab src={"/shopphone.jpg"} alt={"A person browsing a smartphone"} title={"Unlock Exclusive Coupons"} infor={"Discover a treasure trove of exclusive coupons and deals right on O.B"} />
          <InfoTab src={"/smartphoneguy2.jpg"} alt={"A laptop screen displaying a thriving online store"} title={"Empower all Entrepreneurs"} infor={"Support Black business owners and their success"} />
          <InfoTab src={"/smartpeopls.jpg"} alt={"A group of Black entrepreneurs talking and laughing"} title={"Amplify Black Voices"} infor={"Celebrate the rich heritage behind each business."} />
          <InfoTab src={"/charity.jpg"} alt={"man tending a farm in the caribbean"} title={"Charity and Faith "} infor={"Invest in the economic empowerment of Black communities."} />

        </div>
        <div className="flex flex-col gap-1 pt-3  items-center justify-center">
          <h2>Are you an Entreprenuer ? Showcase Your Excellence</h2>
          <Link className='cursor-pointer  hover:text-purple-500' href="https://business-brown-tau.vercel.app/">
            <button className="button">Join Originally.Black</button>
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


