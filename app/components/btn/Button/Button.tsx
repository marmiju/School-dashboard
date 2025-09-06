import { cn } from '@/utills/cn'
import React from 'react'

interface buttonProps {
    text: string,
    icon?: React.ReactNode
    type?: string
    custom_css?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ text = 'click here', icon, type = 'secondary', onClick , custom_css}: buttonProps) => {
    return (
        <div>
            <button onClick={onClick} className={cn(`
            p-2 bg-primary text-white
             rounded font-medium flex items-center gap-2 hover:bg-gray-400 cursor-pointer 
             transition-all duration-300
             `,custom_css )}>{icon} {text} </button>
        </div>
    )
}
