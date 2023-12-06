'use client';
import { useForm } from "react-hook-form";
//import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import Error from '../components/Error'
import { loginUser } from '../slices/auth/auth'
//import { useRouter } from 'next/navigation'
import Link from 'next/link';
import CustomButton from "./customButton";

export default function Login({ onToggle }) {
    const { register, handleSubmit, } = useForm();

const {loading,  error,} = useSelector((state)=> state.auth);

    const dispatch = useDispatch();
    const onSubmit = data => {
        dispatch(loginUser(data));
        
        console.log(data);
    };
    const handleToggle = () => {
        onToggle(); // Call the onToggle function provided by the parent component
      };
    
    return (
        <>
            <div className=" flex flex-col mb-2 justify-center items-center">
                <div>
                    <img src="https://res.cloudinary.com/dfhcjbewi/image/upload/v1682026281/programing/6_halse0.png" width={80} height={80} alt="logo" />
                </div>
                <div className="mb-6 mx-auto font-semibold" >
                    <p className="text-4xl px-4 tracking-tight"> Log in to see more  </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                {error && <div className='text-sm text-red-500' >{error}</div>}
                    <div className="flex flex-col ">
                        {Mylabel()}
                        <div className=" " >
                            <input className="border-2 px-6 py-3 rounded-2xl" type='email' placeholder="Email" {...register("email", { required: true, maxLength: 20 })} />
                        </div>
                        <div className="text-sm py-2"> <label htmlFor="password">Password</label></div>
                        <div>
                            <input className="border-2 px-6 py-3 rounded-2xl" placeholder='Password'
                                type='password'
                                {...register('password', { required: true, minLength: 6 })} />
                        </div>
                        <Link href={"/forgotpassword"}>
                            <p className="text-xs py-2"> Forgotten  your password?</p>
                        </Link>
                    </div>
                    <div className=" my-2  px-6 py-2 bg-purple-800 text-white rounded-2xl">
                        <input className="text-base w-full font-semibold" type="submit" value={ loading ? <Spinner /> : "Log in"} /> </div>
                
                </form>
                <p className='font-bold text-sm'>OR</p>
                <CustomButton textcolor={"text-white"} color={"bg-blue-600"} text={"Continue With Facebook"} />
                <div className="w-[65%]  text-[10px] flex flex-col justify-center items-center">
                    <span className=""> By continuing, you agree to Originally.Bizz's <span className="font-bold">Terms of Service</span> Opens a new tab and acknowledge that you've read our <span className="font-bold">Privacy Policy.</span> Opens a new tab. <span className="font-bold">Notice at collection</span></span>
                </div>
                <div className=" my-3 w-[70%] text-[11px] flex flex-col justify-center items-center">
                    <div className="m-auto p-1 w-[40%] border-t-2 "></div>
                    <div className="">
                     <span onClick={handleToggle} className="font-bold">
                        Not on Originally.Bizz yet? Sign up</span>  </div>
                    <div>Are you a business? <span className="font-bold">
                        Get started here!</span></div>
                </div>
            </div >
        </>
    );
}


function Mylabel() {
    return <div className="text-sm py-2"> <label htmlFor="email">Email address</label>
    </div>;
}

