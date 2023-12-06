'use client';
import React from 'react';
//import Link from 'next/link';
import { useRouter} from 'next/navigation';
//import data from '@/app/utils/data';
//import { IconContext } from "react-icons";
import { FaSearch } from 'react-icons/fa';

export default function TopSearch({setSearch}) {
    let router = useRouter();
    function handleBackClick() {
        router.back()
      }
        return( <div id='topbar' className=' shadow-md flex  justify-center items-center rounded-lg 	flex-row w-auto h-9 px-7 my-4'>
        
          
          <form onSubmit={event => event.preventDefault()}> 
          <div className='m-auto w-auto mb-4 shadow-sm justify-center items-center flex rounded-lg bg-slate-100	flex-row'>
            <label id='menu' className='px-2 text-sm text-slate-500'><div > <FaSearch /></div></label>
            <input type="text"
              name="search"
              id="search"
              onChange={(e)=>setSearch(e.target.value)}
              className="inline-flex w-80 focus:w-80 items-center outline-none  p-2 text-sm focus:bottom-0 bg-slate-100 text-slate-500 rounded-lg  placeholder:text-slate-500
                  hover:placeholder:text-slate-600  hover:transition duration-300  "
              placeholder="search"
            /></div>
          </form>
       
        </div>
     );
};
