"use client"
import React from 'react'
//import Link from 'next/link';
//import { useRouter, usePathname, useParams } from 'next/navigation';
//import businesses from '@/app/utils/business';
//import origins from '@/app/utils/origins';
//import { IconContext } from "react-icons";
//import { FaAngleLeft, FaEllipsisH, FaLocationArrow, FaMapMarkerAlt, FaMapPin, FaShare } from 'react-icons/fa';
import Grid from '@/app/componets/grid';
// import TopBar from '@/app/componets/topbar';
// import Button from '@/app/componets/button';
// import { param } from 'express-validator';
// import ShareButton from '@/app/componets/shareButton';
// import X3Grid from '@/app/componets/3by3grid';
// import ReferButton from '@/app/componets/referShare';
import { getGoogleMapsLink } from '@/app/helpers/minifunctions';
import { FaMapMarker } from 'react-icons/fa';
import { useSelector } from 'react-redux';
async function filterById(id, data) {

  return await data.find(x => x.id === parseInt(id));

}
function filterByKey(key, data, filter) {
  const filtered = data.filter(item => item[key] === filter);

  return filtered
}

function nFormatter(num, digits) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup.slice().reverse().find(function (item) {
    return num >= item.value;
  });
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}

export default  function Account(params) {
  const paramsd = params.params;
  const { id } = paramsd
  const inputString = id;
const modifiedString = inputString.replace('%40', '@');
  const parsedId = modifiedString;
  const origins = useSelector(state => state.origins.origins);
  const businesses = useSelector(state => state.businesses.businesses);
  const gridData = filterByKey("businessId", origins, parsedId);


  const business = businesses.find(business => 
    business.SK === modifiedString);
  console.log(business);
  if (!business) {
    return (
      <div className="bg-white  pt-48 rounded-lg shadow-md p-4">No Business Found </div>
    )
  }

  const saves = nFormatter(business.saves, 1);

  function handleClick(address){
  getGoogleMapsLink(address);
}

  return (

    <div id='accountPage' className=" lg:max-w-5xl " >
      <div>
        {/* <TopBar /> */}
        <div id='business-grid' className='grid grid-cols-1 md:grid-cols-1 md:grid-flow-dense'>

          <div id='business-infor' className='flex items-center flex-col ' >
            <div className='flex justify-center items-center flex-col w-auto  py-1' id='business-card'>
              <div className=' flex  flex-col justify-center items-center h-full'>
                <div id='image-box' className="shadow-md px-1 h-96  " >
                  <img src={business.image} alt={business.name} className="w-full h-full  object-cover  " />

                </div><div id='business-logo' className='rounded-full bg-slate-900  w-32 h-32 -mt-14' > <img src={business.logo} alt={business.businessName} className="w-full h-full object-cover  rounded-3xl hover:opacity-60 transition duration-300" />   </div>
              </div>
              <div className='flex justify-center items-center my-3 flex-col w-full'>

                <div className='px-3 py-3 flex justify-center items-center flex-col w-full'>
                  <p className='font-semibold text-3xl'>{business.businessName}</p>
                  <div className='flex flex-row justify-start my-2 items-center hover:text-violet-600'> <FaMapMarker className='text-[12px] '/> <p onClick={() => handleClick(business.address)} className='text-[12px] px-2 my-2'>{business.address}</p></div>
                  <p>{saves}  saves</p></div>
              </div>
      
            </div>
            <span id='description' className='px-7 mt-3 flex flex-col text-sm'>
              <p>{business.description}</p>
              {/* <p className='pt-3'>{business.services}</p> */}
            </span>

          </div>


        </div>
        <div className='mt-10 pt-3 border-t-2 flex flex-col justify-center items-center '>
          <div className='pb-2 font-medium'> Originals </div>
          <Grid data={gridData} />
        </div>
      </div>
    </div>
  );

}
