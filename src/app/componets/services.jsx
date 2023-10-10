"use client"; // th
import Image from 'next/image';
import ReactPlayer from 'react-player'
import Link from 'next/link';
import { useState } from 'react';
import LeftService from './leftService';
import RightService from './rightService';


export default function Services() {
    return (
        <section id='services' className="bg-neutral-900 dark:bg-neutral-900 pt-2">
            {/* Mobile software development  */}
          
              
                <RightService
                src="https://makeagency.co.uk/wp-content/uploads/2022/06/Make-Marketing-Agency-London-Selina.jpg"
                    title="SOCIAL MEDIA MARKETING"
                    description="We provide a range of social media marketing services that are designed to help companies like yours build a strong, ethical social media presence We work closely with our clients to understand their unique needs and develop a customized social media strategy that aligns with their values and business goals."
                    buttonText="BOOK YOUR CONSULTATION"
                />
          
            {/* Social media marketing  */}
        
            <LeftService
            src="https://makeagency.co.uk/wp-content/uploads/2022/06/Make-Agency-Harry.jpg" 
                title="MOBILE SOFTWARE DEVELOPMENT"
                description="We design for every type of business, DEA Web designers and developers are crucial to your online business success. We have the expertise to build a website that not only represents your brand perfectly but hits all the right criteria for today’s algorithms and trends. Having a responsive, mobile-friendly website is absolutely essential.
                We’ve got you covered!"
                buttonText="BOOK YOUR CONSULTATION"
                />
    
            {/* Search Engine Optimization (SEO) Specialist */}
           
            <LeftService 
            src="https://makeagency.co.uk/wp-content/uploads/2022/06/Neat.jpg"
                title="SEARCH ENGINE OPTIMIZATION"
                description="We can help your business be found. Our SEO experts can demystify the SEO process and make sure you are ranking where you should. we like to focus on ROI. We research your industry, and your competitors, and strategize your keywords to ensure relevant traffic that delivers results"
                buttonText="BOOK YOUR CONSULTATION"
                />
         
            {/* Photography/Videography  */}
        </section>
    );

}