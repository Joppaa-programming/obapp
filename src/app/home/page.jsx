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

function HomeCard() {
  return <div className="h-[50vh]  w-screen pt-4 px-2">
    <p className='text-base px-5  uppercase'>Upcoming Events</p>
    <div className='grid auto-cols-[50px] grid-flow-col  whitespace-no-wrap grid-rows-1 h-full  overflow-x-auto overflow-clip no-scrollbar items-center '>

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

function HomeCard2({title,origins}) {
  return <div className="h-[50vh]  w-screen mt-8 pt-4 px-2">
    <p className='text-2xl px-5 font-semibold uppercase'>{title}</p>
    <div className='grid px-4 auto-cols-[50px] grid-flow-col  whitespace-no-wrap grid-rows-1 h-full  overflow-x-auto overflow-clip items-center '>

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

