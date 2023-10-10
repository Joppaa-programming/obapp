'use client';
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
// import Error from '../components/Error'
import { registerUser } from '../slices/auth/auth'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import CustomButton from './customButton';

const SignUpScreen = ({ onToggle }) => {
    const { loading, userInfo, error, success } = useSelector(
        (state) => state.auth
    )
    const showToastMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
        toast.error('Error Notification !', {
            position: toast.POSITION.TOP_CENTER
        });
        toast.warning('Warning Notification !', {
            position: toast.POSITION.TOP_LEFT



            
        });
        toast.info('Information Notification !', {
            position: toast.POSITION.BOTTOM_CENTER
        });
        toast('Default Notification !', {
            position: toast.POSITION.BOTTOM_LEFT
        });
        toast('Custom Style Notification with css class!', {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: 'foo-bar'
        });
    };
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    let router = useRouter();
    useEffect(() => {
        // redirect user to login page if registration was successful
        if (success === true)  onToggle(); 
        // redirect authenticated user to profile screen
        if (userInfo.length === 0) router.push('/login')

    }, [userInfo, success])

    const submitForm = (data) => {
        // check if passwords match
        if (data.password !== data.confirmPassword) {

            alert('Password mismatch')
        }
        // transform email string to lowercase to avoid case sensitivity issues in login
        data.email = data.email.toLowerCase()
        dispatch(registerUser(data));
    }
    const handleToggle = () => {
        onToggle(); // Call the onToggle function provided by the parent component
      };

    return (
        <>
            <div className="  flex flex-col mb-14 justify-center items-center">
                <div>
                    <img src="https://res.cloudinary.com/dfhcjbewi/image/upload/v1682026281/programing/6_halse0.png" width={80} height={80} alt="logo" />
                </div>
                <div className="mb-2 mx-auto flex flex-col  flex-nowrap justify-center items-center font-semibold" >
                    <p className="text-2xl sm:text-4xl px-2 mb-1  tracking-tight"> Welcome to Originally.Bizz </p>
                    <p className='font-normal'> Sign up to see more </p>
                </div>
                <form onSubmit={handleSubmit(submitForm)}>
                    {error && <div className='text-sm text-red-500'>{error}</div>}
                    <div className='flex flex-col'>
                        <label className="text-sm py-2" htmlFor='name'>Name</label>
                        <input
                            type='text' placeholder='Username'
                            className='border-2 px-6 sm:py-3 py-2  rounded-2xl'
                            {...register('name')}
                            required
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className="text-sm py-2" htmlFor='email'>Email</label>
                        <input placeholder='Email'
                            type='email'
                            className='border-2 px-6 sm:py-3 py-2  rounded-2xl'
                            {...register('email')}
                            required
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className="text-sm py-2" htmlFor='password'>Password</label>
                        <input className='border-2 px-6 sm:py-3 py-2  rounded-2xl' placeholder='Create password'
                            type='password'
                            {...register('password', { required: true, mixLength: 6 })}
                            required
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className="text-sm py-2" htmlFor='email'>Confirm Password</label>
                        <input placeholder='Confirm password'
                            type='password'
                            className='border-2 px-6 sm:py-3 py-2  rounded-2xl'
                            {...register('confirmPassword')}
                            required
                        />
                    </div>
                    <button type='submit' className='my-2 w-full hover:bg-purple-800 transition-  px-6 py-2 bg-purple-600 text-white rounded-2xl' disabled={loading}>
                        {loading ? <Spinner /> : 'Continue'}
                    </button>
                </form>
                <p className='font-bold text-sm'>OR</p>
                <CustomButton textcolor={"text-white"} color={"bg-blue-600"} text={"Continue With Facebook"} />
                <div className="w-[50%]  text-[10px] flex flex-col justify-center items-center">
                    <span className=""> By continuing, you agree to Originally.Bizz's <span className="font-bold">Terms of Service</span> Opens a new tab and acknowledge that you've read our <span className="font-bold">Privacy Policy.</span> Opens a new tab. <span className="font-bold">Notice at collection</span></span>
                </div>
                <div className=" my-3 w-[70%] text-[11px] flex flex-col justify-center items-center">
                    <div className="m-auto p-1 w-[40%] border-t-2 "></div>
                    <div className="">
                        Already a member? <span onClick={handleToggle} className="font-bold"> Log in </span>  </div>
                    <div>Are you a business? <span className="font-bold">
                        Get started here!</span></div>
                </div>
            </div>
        </>
    )
}
export default SignUpScreen;