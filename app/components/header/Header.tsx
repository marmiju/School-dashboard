'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import vercel from '@/public/vercel.svg'
import { redirect } from 'next/navigation'
import { GetMe } from '@/lib/function/auth/getMe'
import { LogOut } from '@/lib/function/LogOut'
import { toast, ToastContainer } from 'react-toastify'

type User = {
    username: string
    
}

const Header = () => {
    const [user, setUser] = useState<User | null>(null)
    useEffect(() => {
        const getMe = async () => {
            const session = await GetMe()
            console.log("session", session)
            if (!session?.user) {
                redirect('/login')
            }
            console.log(session.user)
            setUser(session.user)

        }
        getMe()
    }, [])
    const HandleLogOut=async ()=>{
        const res = await LogOut()
        if (res==='LogOut'){
            redirect('/login')
        }else{
         toast.error(res)
        }
    }
    return (
        <div className='flex col-span-12 bg-secondary  '>
            <ToastContainer/>
            <div className='flex w-full max-w-[98%] mx-auto justify-between p-1 md:px-2 lg:px-4'>
                <div className='flex gap-4 h-[80px]'>
                    <Image className=' bg-black w-44 p-2 rounded hidden md:block' src={vercel} alt='logo' width={80} height={80} />
                    <h3 className='text-xl md:text-2xl font-semibold'>Welcome back <br /><span className='text-sm '>{user?.username}</span></h3>
                </div>
                <button onClick={HandleLogOut} className='bg-primary/70 px-6 py-0 h-[40px] cursor-pointer font-semibold rounded-lg text-background'>Log Out</button>
            </div>
        </div>
    )
}

export default Header
