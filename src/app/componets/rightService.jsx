import React from 'react'

export default function RightService(props) {
    return (
        <div className=' text-white' id='rightsidedservice '>
            <div className='gap-16 items-center content-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'>

                <div className='right-content px-4'>
                    <h2 className='font-black italic text-3xl mb-4'> {props.title}  </h2>
                    <div className='pb-2.5'>
                        <p className='text-lg'>{props.description}</p>
                    </div>
                    <div className='mt-10 mb-10'>
                    <a href="#contactus">
                        <button type="button" className="transition duration-150 ease-in-out lg:text-xl lg:font-bold hover:border-white hover:bg-transparent  font-black hover:border-x-2  text-lime-400 px-4 sm:px-10 border-x-2 border-lime-400 py-2 sm:py-4 ">{props.buttonText}</button>
                        </a></div>
                </div>
                <div className="  grid grid-cols-1 gap-6 mt-9 justify-items-center " >
                    <img className='rounded-xl' src={props.src} alt='' width={'auto'} height={'auto'} />
                </div>

            </div>
        </div>
    )
}
