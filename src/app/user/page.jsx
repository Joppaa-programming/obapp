"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname, useParams } from 'next/navigation';
import { IconContext } from "react-icons";
import { FaAngleLeft, FaEllipsisH, FaLocationArrow, FaMapMarkerAlt, FaMapPin, FaShare } from 'react-icons/fa';
import TopBar from '@/app/componets/topbar';
import Button from '@/app/componets/button';
// import { param } from 'express-validator';
import ShareButton from '../componets/shareButton';
import users from '../utils/users';
import { useSelector } from 'react-redux';
import { Search, binarySearchById } from '../helpers/minifunctions';
import X3Grid from '../componets/3by3grid';
import CircleImages from '../componets/circleImage';
import SignUpScreen from '../componets/signUp';


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

export default async function Account(params) {

  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  )
  const x = useSelector(state => state.saved.saved);
  const userIds = "123";
  const id = 0;
  //  const dataz=  binarySearchById(x,userds).origins;
  // const datar = x.map(y => y.origins)[0];
  const data = x.length > 0 ? x.find(x => x.id == parseInt(userIds)).origins : 0;
  // console.log(datar);
  const loggedUser = success;
  console.log(success);
  const user = await users.find(user => user.id === parseInt(userIds));
  if (!user) {
    return (
      <>
        <SignUpScreen />
      </>
    )
  };

  const saves = nFormatter(user.saves, 1);

  return (

    <div id='accountPage' className=" lg:max-w-5xl " >
      <TopBar />
      <div>
        <div id='user-grid' className='grid grid-cols-1 md:grid-cols-1 md:grid-flow-dense'>

          <div id='user-infor' className='flex items-center flex-col ' >
            <div className='flex justify-center items-center flex-col w-auto  py-1' id='user-card'>
              <div className=' flex  flex-col justify-center items-center h-full'>
                <div id='image-box' className="shadow-md px-1 h-96  " >
                  <img src={user.coverPhoto} alt={user.name} className="w-full h-full  object-cover" />

                </div>
                <span className='-mt-14'>
                  <CircleImages id={'user-profile-image'} w={32} src={user.profileImage} alt={user.name} /></span>

              </div>
              <div className='flex justify-center items-center my-3 flex-col w-full'>

                <div className='px-3 py-3 flex justify-center items-center flex-col w-full'>
                  <p className='font-semibold text-3xl'>{user.name}</p>
                  <p>{saves}  visits </p></div>
              </div>
              <span >
                <ShareButton />
              </span>

            </div>
            <span id='description' className='px-7 mt-3 flex flex-col text-sm'>
              <p>{user.bio}</p>

            </span>

          </div>


        </div>
        <div className='mt-10 pt-3 border-t-2 flex flex-col justify-center items-center '>
          <div className='pb-2 font-medium'> Originals </div>
          {data.length > 0 ? (<X3Grid data={data} />) : (
            <div>You have no save items.</div>
          )}
        </div>
      </div>
    </div>
  );

}


