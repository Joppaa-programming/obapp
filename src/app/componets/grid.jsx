"use client"
import React from 'react'
import OriginCard from './businesCard'
import { useRouter } from 'next/navigation';
//import data from '../utils/data';
//import { FaArrowLeft, FaRegBookmark, FaShapes } from 'react-icons/fa';
//import Link from 'next/link';
export default function Grid({ data }) {
  const router = useRouter();

  return (

    <div className=" grid grid-flow-dense grid-cols-2  gap-4  sm:grid-cols-3 md:grid-cols-3  lg:grid-cols-4   xl:grid-cols-4">
      {data ? data.map((gridItem) => {
        return (
          < div key={gridItem.id} >
            {/* {console.log(gridItem.id)} */}

            <div onClick={() => router.push(`/origin/${gridItem.id}`)} className={`  ${gridItem.isAd ? 'col-span-3  row-span-3 sm:col-span-2  sm:row-span-2' : gridItem.isPortrait ? 'col-span-1 row-span-2 ' : ' col-span-1 row-span-1  '}`}>

              <OriginCard origin={gridItem} />

            </div>
          </div>
        );
      })
        : <div> hi</div>}
    </div>
  );
}
//arrange by difference in likes since 2 hrs