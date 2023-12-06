"use client"; // th
import Image from 'next/image';
//import Link from 'next/link';
//import { useState } from 'react';


export default function Sidekick() {

    return (
        <section id='work' className=" bg-neutral-900 pt-20">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2 md:py-16 lg:px-6">
                <div className="font-light text-white sm:text-lg dark:text-white">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">A sidekick to your marketing team or ideas 
We pride ourselves on bringing your wildest idea & dreams to fruition
</h2>
                    <p className="mb-4">DEA is a design, development & Digital Marketing agency based in London & Manchester 
we Outsmart the competition with best-in-class digital marketing services. Get more traffic. Acquire more customers. Sell more stuff. DEA works for businesses of all sizes
</p>
                </div>
                <div className="grid gap-10 items-center  md:grid-cols-1 md:gap-3 mt-15 justify-items-center ">
                    <Image className=" rounded-lg" src="https://makeagency.co.uk/wp-content/uploads/2022/12/MAKE-AGENCY-CLUTCH.png" alt="office content 1" width={120} height={100} />
                    <Image className=" rounded-lg" src="https://makeagency.co.uk/wp-content/uploads/2022/12/MAKE-AWWWARDS.svg" alt="office content 1" width={120} height={100} />
                    <Image className=" rounded-lg" src="https://makeagency.co.uk/wp-content/uploads/2022/12/MAKE-THE-TIMES.svg" alt="office content 1" width={120} height={100} />
                </div>
            </div>
        </section>
    )

}