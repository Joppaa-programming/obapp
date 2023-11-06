"use client"
import React from 'react'
import BusinessCard from './businesCard'
import { useRouter } from 'next/navigation';
import data from '../utils/data';
import { FaArrowLeft, FaRegBookmark, FaShapes } from 'react-icons/fa';
import Link from 'next/link';
export default function Grid({ data }) {
  const router = useRouter();

  return (

    <div className=" grid grid-flow-dense grid-cols-2  gap-4 px-3 sm:grid-cols-4 md:px-9 lg:px-28 lg:grid-cols-6   xl:grid-cols-8">
      {data ?  data.map((gridItem) => {
        return (
          <React.Fragment  key={gridItem.id}>
 {/* {console.log(gridItem.id)} */}
            <div onClick={() => router.push(`/origin/${gridItem.id}`)} className={`col-span-1  ${gridItem.isAd ? 'col-span-3  row-span-3 sm:col-span-2  sm:row-span-2' : gridItem.isPortrait ? 'row-span-2' : 'row-span-1'}`}>
       
              <BusinessCard origin={gridItem} />

            </div></React.Fragment>
        );
      })
     : <div> hi</div> }
    </div>
  );
}
//arrange by difference in likes since 2 hrs