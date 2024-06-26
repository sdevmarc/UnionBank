import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()

    const handleSignUp = () => {
        navigate('/signup')
    }

    const handleLogin = () => {
        navigate('/')
    }
    return (
        <>
            <div className="w-full h-screen flex justify-center items-center">
                <form className='w-[30rem] h-[35rem] bg-[#F48A3D] flex flex-col justify-center items-center gap-[1rem] px-[5rem]'>
                    <h1>UnionBank</h1>
                    <div className="w-full flex flex-col">
                        <h1>Mobile No.</h1>
                        <input type="text" inputMode='numeric' className='px-[1rem]' placeholder='Enter your mobile number...' />
                    </div>
                    <div className="w-full flex flex-col">
                        <h1>Password</h1>
                        <input type="password" className='px-[1rem]' placeholder='Enter your password...' />
                    </div>
                    <button onClick={handleLogin}>
                        Login
                    </button>
                    <div className="w-full flex flex-col justify-start items-start">
                        <p>
                            Don't have an account? <span className='cursor-pointer text-[#fff]' onClick={handleSignUp}>Sign Up.</span>
                        </p>
                        <p className='cursor-pointer'>
                            Forgot password?
                        </p>
                    </div>
                </form>
            </div>
        </>
    )
}
