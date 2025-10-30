'use client'
import { LogOut } from '@/lib/function/auth/LogOut'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface User {
    id: number,
    name: string,
    profile_picture: string,
    role: string,
    email: string
}

const SidebarAvatar = () => {
    const [user, setuser] = useState<User | null>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('token'))

    useEffect(()=>{
        const tok =  localStorage.getItem('token')
        setToken(tok)
        if (!token){
            return redirect('/login')
        }
    },[token])

    useEffect(() => {
        const data = localStorage.getItem('user')
        if (data) {
            try {
                const parsedUser = JSON.parse(data)
                setuser(parsedUser)
            } catch (e) {
                console.error('Failed to parse user from localStorage', e)
                setuser(null)
            }
        } else {
            setuser(null)
        }
    }, [])

    return (
        <button onClick={() => setIsOpen(!!!isOpen)} className='absolute bottom-0 left-0 right-0'>
            <div className='flex  border border-primary/20 items-center  rounded-sm m-1 px-2 absolute right-0 left-0  bottom-0 gap-2 overflow-ellipsis'>
                <Image className='object-cover w-6 h-6 rounded' src={user?.profile_picture || 'https://avatars.githubusercontent.com/u/190490261?v=4'} alt='profile_photo' width={50} height={50} />
                <div className='text-text/90'>
                    <h3>{user?.name}</h3>
                    <p className='text-text/40 text-sm'>{user?.role}</p>
                </div>
                
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} border fixed  min-w-40 gap-1 bottom-10  left-10 border-text/20 flex flex-col px-2 py-2 text-text/80 rounded-xl backdrop-blur-sm`}>
                <Link className='border-white/20 border rounded-sm px-2 hover:bg-slate-900 ' href={'/profile'}>Profile</Link>
                <button onClick={LogOut} className='border-white/20 border rounded-sm px-2 hover:bg-slate-900' >Logout</button>
            </div>

        </button>
    )
}

export default SidebarAvatar