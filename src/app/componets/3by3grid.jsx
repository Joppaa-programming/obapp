"use client"
import React from 'react'
import BusinessCard from './businesCard'

export default function X3Grid({ data }) {
  

  return (

    <div className=" grid grid-flow-dense grid-cols-3  gap-2 px-3 sm:grid-cols-4 md:px-9 lg:px-28 lg:grid-cols-6   xl:grid-cols-8">
      {data.map((gridItem) => {
        return (
          <React.Fragment key={gridItem.id}>
 {/* {console.log(gridItem.id)} */}
            <div className={`col-span-1  ${gridItem.isAd ? 'col-span-3  row-span-3 sm:col-span-2  sm:row-span-2' : gridItem.isPortrait ? 'row-span-2' : 'row-span-1'}`}>
       
              <BusinessCard origin={gridItem} />

            </div></React.Fragment>
        );
      })}
    </div>
  );
}
//arrange by difference in likes since 2 hrs