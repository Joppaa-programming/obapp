'use client';
import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/navigation';
export default function Navigate2Busines(business, saves) {
     business   = business
     saves  = saves 
    const router = useRouter();
    return <div key={business.id} onClick={() => router.push(`/account/${business.id}`)}  > <div className='flex w-full'>
    <div id='business-logo' className='rounded-full bg-slate-900 w-14 h-14'></div>
    <div className='px-3'>              <p className='font-semibold'>{business.businessName}</p>
      <p>{saves}  saves</p></div>
  </div>
  </div>;
}


function newFunction(business, saves, router) {

  return (<div onClick={() => router.push(`/account/${business.id}`)} >
    <div className='flex w-full'>
      <div id='business-logo' className='rounded-full bg-slate-900 w-14 h-14'></div>
      <div className='px-3'>              <p className='font-semibold'>{business.businessName}</p>
        <p>{saves}  saves</p></div>
    </div>

  </div>)

}
