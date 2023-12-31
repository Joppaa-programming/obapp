"use client"
import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useDispatch, useSelector } from 'react-redux';
import { originSaved, originAdded } from '../slices/savedSlice';


const saved = [];
const OriginCard = ({ origin }) => {
  const saver = useSelector(state => state.saved.saved);
  const dispatch = useDispatch();
  function handleSave(origin) {
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
    // console.log(saver.map(x => x.origins));
    if (saver.length > 0) {
      dispatch(originSaved(item2Save));
      // dispatch(originAdded(origin2Save));

      return
    }
    dispatch(originSaved(item2Save));
    // saved.push(item2Save);
    return;
  }

  const router = useRouter();
  return (
    <>
      {/* <div className='text-2xl px-2 text-white absolute z-10  hover:text-purple-800' > <div onClick={()=>handleSave(origin)}><FaBookmark /></div></div> */}
      <div onClick={() => router.push(`/origin/${origin.id}`)} className={`h-full relative     `} id={origin.id}>
   

 <img src={origin.image} alt={origin.id} className="w-full h-full object-fill shadow-md  rounded-md hover:opacity-60 transition duration-300" />


        {/* <Link href={`/origin/${origin.id}`}> */}
        {/* <Image className='rounded-md shadow-md'
          src={origin.image}
          style={{ objectFit: "fill" }}
        fill={true}
          alt={origin.id}
        /> */}
        {/* </Link> */}
      </div>
    </>
  );
};

export default OriginCard;
