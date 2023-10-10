"use client"
import React from 'react'
import Link from 'next/link';
import { useRouter, usePathname, useParams } from 'next/navigation';
import businesses from '@/app/utils/business';
import { IconContext } from "react-icons";
import { FaAngleLeft, FaEllipsisH, FaLocationArrow, FaMapMarkerAlt, FaMapPin, FaShare } from 'react-icons/fa';
import Grid from '@/app/componets/grid';
import Button from '@/app/componets/button';
import Navigate2Busines from '@/app/componets/navigate2busines';
import origins from '@/app/utils/origins';
import TopBar from '@/app/componets/topbar';
import { useDispatch, useSelector } from 'react-redux';
import { originSaved, originAdded } from '../../slices/savedSlice';
import X3Grid from '@/app/componets/3by3grid';
import CircleImages from '@/app/componets/circleImage';


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


function BusinessDetail(params) {
  const router = useRouter();

  const saver = useSelector(state => state.saved.saved);
  const dispatch = useDispatch();
  function handleSave(origin) {
    console.log("origin", " " + origin);
    const savedAt = new Date().toISOString();
    const userId = 123
    const origin2Save = {
      id: origin.id,
      isPortrait: origin.isPortrait,
      image: origin.image,
      savedAt,
    };
    const item2Save = {
      id: userId,
      origins: [origin2Save],
      createdAt: savedAt,
      updatedAt: savedAt,
      userId: userId
    };

    if (saver.length > 0) {
      dispatch(originSaved(item2Save));
      // dispatch(originAdded(origin2Save));

      return
    }
    dispatch(originSaved(item2Save));
    // saved.push(item2Save);
    return;
  }

  const paramsd = params.params;
  const { id } = paramsd
  // console.log(id);

  const origin = origins.find(origin => origin.id === parseInt(id));
  if (!origin) {
    return (
      <div className="bg-white  pt-48 rounded-lg shadow-md p-4">No Origin Found </div>
    )
  }
  const business = businesses.find(business => business.id === origin.businessId);
  // const businessName = business.businessName;
  const saves = nFormatter(business.saves, 1);
  return (

    <div id='originPage' className=" lg:max-w-5xl " >
      <div>
        {/* <TopBar /> */}
        <div id='origin-grid' className='grid grid-cols-1 md:grid-cols-2 md:grid-flow-dense'>
          <div id='image-box' className="shadow-md px-1 " >
            <img src={origin.image} alt={origin.title} className="w-full h-full  object-cover  hover:opacity-60 transition duration-300" />
          </div>
          <div id='origin-infor' className='flex flex-col p-3' >
            <div className='flex justify-between   w-auto  py-1' id='origin-card'>
              {/* <Navigate2Busines origin={(origin)} saves={(saves)}/> */}
              {businessDets(origin, saves, business)}
              <div onClick={() => router.push(`/business/${origin.businessId}`)}>
                <Button />
              </div>
            </div>
            <span id='description' className='px-5 mt-4 flex flex-col text-sm'>
              <p>{origin.content}</p>
              {/* <p className='pt-3'>{origin.services}</p> */}
            </span>
          </div>
        </div>
        <div className='mt-10 pt-3 border-t-2 flex flex-col justify-center items-center '>
          <div className='pb-2'> More like this </div>
          <Grid key={"origingrid"} data={origins} />
        </div>
      </div>
    </div>
  );
};
function businessDets(origin, saves, business) {
  return <Link href={`/business/${origin.businessId}`}  > <div className='flex w-full'>
    <span className='w-12 h-12'>
   <CircleImages w={12} src={business.logo} alt={business.businessName} id={'business-logo'} />
   </span>
    <div className='px-3'>              <p className='font-semibold'>{business.businessName}</p>
      <p>{saves}  saves</p></div>
  </div>
  </Link>;
}
export default BusinessDetail;


