"use client"; // th
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export default function Testimonial() {

    return (
        <section id='testimonial' className="bg-white dark:bg-neutral-900 pt-20">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Creatively led.
                        Results driven.
                        Experts at what we do.
                        We make it happen.</h2>
                    <p className="mb-4">Make is a London-based digital agency. We guarantee results across three key business areas: web design & build, social media & digital marketing, and creative content.</p>
                </div>
                <div className="grid grid-cols-1 gap-2 mt-8">
                    <Image className=" rounded-lg" src="" alt="office content 1" width={150} height={100} />
                    <Image className=" rounded-lg" src="" alt="office content 1" width={150} height={100} />
                    <Image className=" rounded-lg" src="" alt="office content 1" width={150} height={100} />
                </div>
            </div>
        </section>
    )

}