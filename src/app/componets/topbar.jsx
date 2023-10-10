'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname, useParams } from 'next/navigation';
import data from '@/app/utils/data';
import { IconContext } from "react-icons";
import { FaAngleLeft, FaEllipsisH, FaLocationArrow, FaMapMarkerAlt, FaMapPin, FaShare } from 'react-icons/fa';

export default function TopBar() {
    let router = useRouter();
    function handleBackClick() {
        router.back()
      }
        return( <div id='topbar' className=' shadow-md flex justify-between items-center text-purple-800	 w-auto h-9 px-7 my-4'>
          <div>
            <div className=' flex flex-row'>
              <div id='back' className='text-xl' onClick={handleBackClick}><FaAngleLeft /> <div id='card'></div> </div>
              <div id='share' className='px-6  text-xl'> <FaShare /></div>
            </div>
          </div>
          <div id='menu' className='px-6 text-xl'> <FaEllipsisH /></div>
        </div>
     );
};
