import Error from 'next/error'
import Image from 'next/image'
import React from 'react'

export default function CircleImages({ w, src, alt, id }) {
    return (
        <div>

            <div id={id} className={`rounded-xl  relative  w-${w} h-${w} `}>
                <Image className='rounded-xl'
                    src={src} fill={true} sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                "
                    alt={alt} style={{ objectFit: "cover" }} />

            </div></div>
    )
}

