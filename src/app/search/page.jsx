"use client"
import React, { useState } from 'react'
import TopSearch from '../componets/topSearch'
import Grid from '../componets/grid';
import { useSelector } from 'react-redux';

export default function page() {
  const origins = useSelector(state => state.origins.origins);
  const [search, setSearch] = useState('');

  const filteredData = origins.filter((origin )=> {
    return search.toLowerCase() ==="" ? origin : origin.title.toLowerCase().includes(search.toLowerCase())
  })
  // console.log(filteredData)
  return (
    < div className='w-full px-4'>
    <TopSearch setSearch={setSearch} />
    {/* <div>You Searched {search} </div> */}
    <div>  <Grid data={filteredData} /> </div>
    </div>
  )
}
