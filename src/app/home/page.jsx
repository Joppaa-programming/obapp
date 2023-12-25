"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import HomeTitle from '../componets/hometitle'
//import origins from '@/app/utils/origins';
import InfoTab from '../componets/tabs';
import OriginCard from '../componets/businesCard';
export default function Homepage() {

  const origins = useSelector(state => state.origins.origins);

  return (
    <>
      <div className=" flex flex-col items-center relative justify-center">
   
        <HomeTitle origins={origins} />
        {HomeCard2({title:'Upcoming Events', origins: origins})}
        {HomeCard2({title:'Exclusive Coupons', origins: origins})}
        {HomeCard2({title:'Community', origins: origins})}
        {HomeCard2({title:'Our Pick', origins: origins})}
        {HomeCard2({title:'Countries', origins: origins})}
      </div>
    </>
  )
}



function HomeCard2({title,origins}) {
  return <div className="h-[50vh]  w-screen  py-[3rem] px-2 shadow-md">
    <div className='text-[18px] px-5 py-2 font-semibold uppercase shadow-sm flex flex-row justify-between items-center'><p>{title}</p>
    <p className='pr-8 text-[12px] hover:underline cursor-pointer'>explore</p></div>
    <div className='grid px-4 auto-cols-[43px] grid-flow-col  whitespace-no-wrap grid-rows-1 h-full  overflow-x-auto overscroll-none overflow-hidden items-center no-scrollbar '>

      {origins ? origins.map((origin) => {
        return (
          <div key={origin.id} className='  h-auto p-1 col-span-5'>
            <OriginCard origin={origin} />

            {/* <InfoTab src={origin.image} alt={origin.tags} title={origin.title} infor={origin.content} />  */}
          </div>);
      }) : <div>No Origins</div>}
    </div>
  </div>;
}

