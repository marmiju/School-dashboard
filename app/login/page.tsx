'use client'
import React, { ChangeEvent, useEffect, useState } from 'react'
import InputBox from '../components/InputBox/InputBox'
import { MdEmail, MdPassword } from 'react-icons/md'

import { RiProgress5Line } from 'react-icons/ri'
import Link from 'next/link'
import { LogIn } from '@/lib/function/auth/LogIn'
import { redirect } from 'next/navigation'
import { GetMe } from '@/lib/function/auth/getMe'
import { toast, ToastContainer } from 'react-toastify'

const LogInPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState({
        email: '',
        password: '',
    })
    const handleChenge = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { name, value } = e.target
        setData((prev) => ({
            ...prev,
            [name]: value
        }))

    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const res = await LogIn({ data })
        setIsLoading(false)
        console.log(res)
        if (res.message === 'Logged in successfully') {
            toast.success(res.message)
            redirect('/'); // or any page you want
        } else {
            console.log(res)
            toast.error(res.message)
        }
    };

    useEffect(() => {
        const getMe = async () => {
            const session = await GetMe()
            if (session.user) {
                redirect('/')
            }
        }
        getMe()

    }, [])

    return (
        <div className='max-w-6xl mx-auto p-4 min-h-screen flex justify-center items-center'>
            <ToastContainer />
            <form onSubmit={handleSubmit} className='space-y-4 grid justify-center'>
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
                <p>You have no account, <Link href={'/register'} className='text-primary'>Create New</Link></p>

            </form>

        </div>
    )
}

export default LogInPage
