import React from 'react'
import { useState } from 'react';
import addData from '../utils/firebase';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
//import Link from 'next/link';

export default function Footer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const info = {
                name: "Guest",
                email: email,
                message: "Subscribe to New letter",
                createdAt: new Date(),
            }
            // const id = 'digitalethics' + idNumber;
            await addData(info);
            setName('');
            setEmail('');
            setMessage('');
            setSubmitted(true);
            console.log('Submission worked');
        } catch (err) {
            setError(err);
        }
    };
    return (
        < div className='footer px-5  '>
            <div id='footer-main' className='pt-20 pb-12  gap-16 items-start content-center py-8 px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2 lg:py-16 lg:px-6" '>
                <div className=''>
                    <h2 className='text-3xl font-bold sm:text-5xl'>
                        Subscribe
                    </h2>
                    <p className='text-base'>
                        Subscribe to our newsletter to
                        stay in touch with the latest.
                    </p>
                    <form className='flex flex-col mb-5 ' onSubmit={handleSubmit}>
                        <label className=' pt-3 text-xs'>
                            Your work email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="block w-full py-3 px-4  bg-transparent placeholder-black text-black  border-black-600 border-b-2 "
                            placeholder=""
                        />
                        <div className=" buttons py-5 mt-3 mb-3">
                            <button
                                type="submit"
                                className=" justify-center text-xs h-9   px-8 mb-5  font-bold rounded-full text-black bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-lime-500 focus:ring-offset-lime-200 active:bg-lime-600 transition duration-150 ease-in-out">
                                Sign up Now!
                            </button></div>
                    </form>
                    {submitted && <div className="mt-6 text-black">Thank you for Subscribing</div>}
                    {error && <div className="mt-6 text-red-600">Error: {error.message}</div>}
                </div>
                <div className='md:pl-10'>
                    <h2 className='text-3xl sm:text-5xl font-bold'>MAN</h2>
                    <p className='mt-3'> G07, Record Hall<br></br>
                        16A Baldwin's Gardens,<br></br>
                        London EC1N 7RJ</p>
                    <p className='mt-3'>hi@makeagency.co.uk<br></br>
                        020 3567 0860
                    </p>
                    <div className='flex pt-3 justify-start text-center'>
                        <FaFacebookF className='text-xl mr-5' /><FaInstagram className='text-xl mr-5 ' /><FaLinkedinIn className='text-xl mr-5' />
                    </div>
                </div>
            </div>
            <div id='footer-bottom' className='border-t-2 lg:flex lg:justify-center lg:text-center'>
     
                <div className='text-xs my-4 text-gray-500 lg:flex px-2 align-top justify-center'>
                <a href="#contactus">
                <div className='flex md:px-5 content-center md:align-middle text-slate-900' >
                    <h2 className='text-xl text-center font-bold'>
                        DEA
                    </h2>
                    <span className='text-xl font-bold lg:grid lg:grid-cols-2 '>
                        |
                    </span>
                    <p className='text-xl font-bold'>
                        be ready.
                    </p>
                </div>
                </a>
                    <p className=''> Make Agency Limited Copyright © 2023 </p>
                    <p className='px-3'>Company Number 08834390</p>
                    <p className='px-3'> VAT Registered GB 202310288 </p>
                    <a href="/"><h2 className='text-xs px-3 text-black '>Privacy Policy
                </h2 > </a>
        
                <a href="/">
                        <h2 className='text-xs px-3 text-black '>
                            Terms & Conditions
                        </h2>
                    </a>
                </div>

         
              


            </div></div>
    )
}
