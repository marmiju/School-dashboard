'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import vercel from '@/public/vercel.jpg'
import { redirect } from 'next/navigation'
import { GetMe } from '@/lib/function/auth/getMe'
import { LogOut } from '@/lib/function/auth/LogOut'
import { toast, ToastContainer } from 'react-toastify'
import Link from 'next/link'
import { PiUserFill } from 'react-icons/pi'
import { UserDetailsType,GetUserDetails } from '@/lib/function/users/getUSerById'

type User = {
    id:string,
    username: string
    
}
const Header = () => {
    const [user, setUser] = useState<User |null>()
    console.log(user)
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
                    <Image className=' bg-black   rounded hidden md:block' src={vercel} alt='logo' width={80} height={80} />
                    <div>
                        <h3 className='text-xl md:text-2xl font-semibold text-primary'>Welcome back</h3>
                        <p className=''>{user?.username}</p>
                    </div>
                </div>
                <Link className='text-2xl flex items-center  justify-center' href={`/profile/${user?.id}`}><div className='border border-slate-200 rounded-2xl p-1 text-gray-600 shadow grid justify-center items-center'><PiUserFill/></div></Link>
            </div>
        </div>
    )
}

export default Header
