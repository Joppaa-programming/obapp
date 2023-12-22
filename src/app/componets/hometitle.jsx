'use  client'
import React, { useEffect } from 'react'
//import origins from '@/app/utils/origins';
import { useState } from 'react';
export default function HomeTitle({origins}) {

    const [tags, setTags] = useState(false)
    const [mainArry, setMainArry] = useState([])
    let tagArray = ['']

    function handleClick (e) {
        e.preventDefault()
setTags(!tags)
    }
    function sortHashtagsAlphabetically(array) {
        return array.map(item => item.S).sort((a, b) => a.localeCompare(b));;
      }
  
    origins.map((origin) => {
            const arry = origin.tags
            arry.forEach((tag) => {
                
                if (tagArray.includes(tag)) {
                    return;
                }
                tagArray.push(tag)
            })
        })
    useEffect(()=> {
    
        setMainArry(sortHashtagsAlphabetically(tagArray))

    },[origins])
   
console.log(mainArry)
    // const tagSet = new Set(tagArray)
    return (
        <div className="h-[10vh] w-full pt-4 mt-4 px-6"><h1 className='text-3xl text-left leading-none tracking-tighter font-bold'>Originally.Black</h1> <div onClick={(e)=>handleClick(e)} className='w-full pt-[1.5rem] flex font-semibold relative shadow-md justify-between p-2 flex-row'>
            <p className='text-[14px]'>Browse Tags</p>
            {tags === false ? <p className='pr-8'>R</p> :<p className='pr-8'>X</p> }

        </div>{ tags === true && 
            <div className='flex flex-col  rounded-md h-[70vh] w-[333px] top-[133px] py-5 px-2 bg-black z-30 absolute'>
               
               <div className='overflow-scroll no-scrollbar '> {mainArry && mainArry.map((atag,i) => {
                    return (<p key={i} className='text-white hover:text-amber-300 uppercase m-1'>{atag}</p>)

                })}</div> <p className='text-white text-lg uppercase text-right p-2 mt-2 pr-3'> Click A Tag to Continue </p>

            </div>}
        </div>
    )
}
