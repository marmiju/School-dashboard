'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { IconType } from 'react-icons'


const RedirectLink = ({title,link,icon}:{title:string,link:string,icon:IconType}) => {
    const path = usePathname()
    return (
        <Link className={`w-full ${path===link ?'bg-primary text-background' : 'bg-secondary text-primary'} flex items-center  p-2 gap-2`} href={link}>
            <div className='w-[25%] flex justify-center'>{React.createElement(icon)}</div>
            <p className='w-[75%] text-start font-medium '>{title}</p>
        </Link>
    )
}

export default RedirectLink
