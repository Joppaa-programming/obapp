"use client"
import React from 'react'
import HomeTitle from '../componets/hometitle'
import origins from '@/app/utils/origins';
export default function Homepage() {
//console.log(origins)
  return (
    <>
      <div className=" flex flex-col items-center justify-center">
        <HomeTitle />
        <div className="h-[50vh]  w-screen pt-4 px-6">
           <p className='text-xs uppercase'>Upcoming Events</p>
           <div className='grid h-full w-screen overflow-y-hidden  bg-blue-400'>
{origins.map((origin) =>{

})   }
           </div>
           </div>
        <div className="h-[50vh] w-screen pt-4 px-6">Exclusive Coupons</div>
        <div className="h-[50vh] w-screen pt-4 px-6">Community</div>
        <div className="h-[50vh] w-screen pt-4 px-6">Our Pick</div>
        <div className="h-[50vh] w-screen pt-4 px-6">Countries</div>
      </div>
    </>
  )
}

