'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { IconType } from 'react-icons'


interface RedirectLinkProps {
    title: string;
    link: string;
    icon: IconType;
    onClick?: () => void;
}

const RedirectLink = ({ title, link, icon, onClick }: RedirectLinkProps) => {
    const path = usePathname()
    return (
        <Link 
            className={`w-full ${path===link ? 'bg-primary text-background' : 'bg-secondary text-primary hover:bg-primary/10'} 
                flex items-center p-2 gap-2 transition-colors duration-200`} 
            href={link}
            onClick={onClick}
        >
            <div className='w-[25%] flex justify-center'>{React.createElement(icon)}</div>
            <p className='w-[75%] text-start font-medium truncate'>{title}</p>
        </Link>
    )
}

export default RedirectLink
