"use client"; // th
import Image from 'next/image';
import Link from 'next/link'

export default function InfoTab({src,alt,title,infor}) {
    return ( 
  
   
    <div className=" flex relative justify-center  flex-shrink-0 px-4 rounded-sm ">
      <Image  
     
        src={src}
        alt={alt}
        width={300}
        height={200}
        style={{ objectFit: "fill", height: "100%" }} />
    
      <span className='absolute bottom-20 text-center w-full rounded-sm bg-slate-50'>
       <Link href={'/search'}> <h3 className="text-xl font-bold tracking-tight text-black">{title}</h3>
     </Link>   <p className="text-gray-700 ">{infor}</p>
      </span>
    </div> )
  }
