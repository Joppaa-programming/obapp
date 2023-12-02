"use client"; // th
import Image from 'next/image';

export default function InfoTab({src,alt,title,infor}) {
    return <div className=" relative flex-shrink-0 px-4 rounded-sm ">
      <Image
        src={src}
        alt={alt}
        width={300}
        height={200}
        style={{ objectFit: "cover", borderRadius: '5px', width: "260px", height: "460px" }} />
  
      <span className='absolute bottom-20 bg-slate-50'>
        <h3 className="text-xl font-bold text-black">{title}</h3>
        <p className="text-gray-700">{infor}</p>
      </span>
    </div>;
  }