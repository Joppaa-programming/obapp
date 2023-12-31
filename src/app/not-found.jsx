import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import NavBar from './componets/nav';
export default function page() {
    return (
        <>
            <NavBar />
            <main className="relative h-screen bg-[rgb(255,255,255)] overflow-hidden">
                <div className='absolute items-center flex flex-col w-[390px] h-44 left-0 right-0  z-10 top-0 bottom-0 m-auto'><h1 className=' m-auto uppercase text-[36px] tracking-[-0.08em]'>we hit a brick wall</h1>
                    <p>Theres nothing here, </p > <p> Go back to your last page</p> </div>
                <Image priority={true} src="/404.jpg" alt="Background image" className="absolute z-0 h-full w-full object-cover" width="1920" height="1080" style={{ "aspectRatio": 1920 / 1080, "objectFit": 'cover', "height": "100vh" }} />
                <div className="relative h-full">
                    {/* <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center">
                    <Logo /><div className="flex gap-4">
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">Log in</button>
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Create an account</button></div></div> */}
                    <footer className="absolute bottom-0 left-0 w-full bg-white bg-opacity-75 py-4 px-6"><nav className="flex justify-between items-center">
                        <div className="flex flex-col  sm:flex-row sm:gap-4 text-[12px] "><Link className="text-gray-600 hover:text-gray-900" href="https://originally.black/">Origins</Link><Link className="text-gray-600 hover:text-gray-900" href="https://business.originally.black/">Entreprenuers</Link><Link className="text-gray-600 hover:text-gray-900" href="#">Contact Us</Link></div>
                        <div className="text-gray-500 text-sm">© 2024 Originally.Black</div></nav></footer></div></main></>
    )
}
function Logo() {

    return <Link href={'/'}><div className='relative cursor-pointer flex items-center'><Image alt='text logo' height={40} width={150} src={'/logothin.png'} />
    </div></Link>
}