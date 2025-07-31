'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaUser } from 'react-icons/fa6'


const RedirectLink = ({title,link}:{title:string,link:string}) => {
    const path = usePathname()
    return (
        <Link className={`w-full ${path===link ?'bg-primary text-background' : 'bg-secondary text-primary'} flex items-center  p-2 gap-2`} href={link}>
            <div className='w-[25%] flex justify-center'><FaUser/></div>
            <p className='w-[75%] text-start '>{title}</p>
        </Link>
    )
}

export default RedirectLink
