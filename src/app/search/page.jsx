"use client"
import React, { useState } from 'react'
import TopSearch from '../componets/topSearch'
import Grid from '../componets/grid';
import { useSelector } from 'react-redux';


export default function page() {
  const origins = useSelector(state => state.origins.origins);
  const [search, setSearch] = useState('');
  const [gridL, setGrid] = useState('origins');
  const handleClick = (newMessage) => {
    setGrid(newMessage);
  };
  const filteredData = origins.filter((origin )=> {
    return search.toLowerCase() ==="" ? true : origin.title.toLowerCase().includes(search.toLowerCase())
  })
  const contentData = origins.filter((origin )=> {
    return search.toLowerCase() ==="" ? origin : origin.content.toLowerCase().includes(search.toLowerCase())
  })
  const tagData = origins.filter((origin )=> {
    return search.toLowerCase() === "" ? true : origin.tags.some(tag => tag.S.toLowerCase().includes(search.toLowerCase()));
  })
  const businessData = origins.filter((origin )=> {
    return search.toLowerCase() === "" ? true : origin.businessName.toLowerCase().includes(search.toLowerCase());
  })
console.log(filteredData)
  // console.log(filteredData)
  return (
    < div className='w-full px-4'>
    <TopSearch setSearch={setSearch} />
    <div className='py-3 mb-2 '><ul className='flex flex-row justify-center items-center'>
      <li  onClick={() => handleClick('origins')} className='px-2 hover:underline cursor-pointer'>origins</li>
      <li onClick={() => handleClick('business')} className='px-2 hover:underline cursor-pointer'>creators</li>
      <li onClick={() => handleClick('tags')} className='px-2 hover:underline cursor-pointer'>tags</li>
      </ul></div> 
    <div> { gridL==='origin'? <Grid data={filteredData } /> :gridL==='tags'?  <Grid data={tagData } />: gridL==='business'? <Grid data={businessData } /> :<Grid data={filteredData } /> } 
    </div>
    </div>
  )
}
