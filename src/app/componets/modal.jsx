'use client'
import React, { useState } from 'react'
import Login from './login';
import SignUpScreen from './signUp';

export default function Modal() {
    const [isVisible, setModal] = useState(false);
    const [currentComponent, setCurrentComponent] = useState('login');
    const handleCloseTwo = (e) => {
        if (e.target.id === 'modalwrapper')
            setModal(false);
    }
    const handleClose = () => { setModal(false) }
    if (!isVisible) return null;

    const toggleComponent = () => {
        setCurrentComponent(currentComponent === 'login' ? 'signup' : 'login');
    };


    return (
        <div onClick={handleCloseTwo} id='modalwrapper' className='fixed inset-0 m-auto bg-black bg-opacity-30 backdrop-blur-sm  flex justify-center items-center'>
            <div className='md:w-[600px] w-[95%] py-[10px] pb-[24px] pt[20px]'>
                <div className='bg-white p-2 rounded-[32px] flex flex-col shadow-2xl '>
                    <div className='flex rounded-full w-9 h-9  place-self-end py-4 mx-4'>
                        <button onClick={handleClose} className='text-xl  text-purple-800 '> X</button>
                    </div>
                    <div>    {currentComponent === 'login' ? (
                        <Login onToggle={toggleComponent} />) : (<SignUpScreen onToggle={toggleComponent} />
                    )}

                    </div>
                </div>
            </div>
        </div>
    )
}


