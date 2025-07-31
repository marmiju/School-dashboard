'use client'
import React, { ChangeEvent,  useState } from 'react'
import InputBox from '../components/InputBox/InputBox'
import { MdEmail, MdPassword } from 'react-icons/md'

import { RiProgress5Line } from 'react-icons/ri'
import Link from 'next/link'

import { toast, ToastContainer } from 'react-toastify'
import { Register } from '@/lib/function/auth/Register'

const RegisterPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState({
        username:'',
        email: '',
        password: '',
    })
    const handleChenge = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        console.log(name,value)
        setData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true)
        const res = await Register({data})
        setIsLoading(false)
        toast(res.message)
    };

    return (

        <div className='max-w-6xl mx-auto p-4 min-h-svh flex flex-col  justify-center items-center'>
            <ToastContainer />
            <h3 className='text-2xl text-primary text-center font-semibold'>Register Now</h3>
            <form onSubmit={handleSubmit} className='space-y-4 grid justify-center'>
                <InputBox
                    name='username'
                    label='username'
                    onChenge={handleChenge}
                    value={data.username}
                    required={true}
                    placeholder='Enter your Username'
                    type='text'
                    icon={<MdEmail />}
                />
                <InputBox
                    name='email'
                    label='Email'
                    onChenge={handleChenge}
                    value={data.email}
                    required={true}
                    placeholder='Enter your email'
                    type='email'
                    icon={<MdEmail />}
                />
                <InputBox
                    name='password'
                    label='Password'
                    onChenge={handleChenge}
                    required={true}
                    value={data.password}
                    placeholder='Enter your password'
                    type='password'
                    icon={<MdPassword />}
                />
                {isLoading ? <div className='w-full bg-secondary flex items-center justify-center p-2 text-xl rounded-xl text-primary/50'><RiProgress5Line /> wait...</div>
                    : <button type='submit' className='w-full bg-primary p-2 rounded-xl text-background font-semibold cursor-pointer' >Submit</button>}
                <p>I have existing Account, <Link href={'/login'} className='text-primary'>Log in now</Link></p>

            </form>

        </div>
    )
}

export default RegisterPage
