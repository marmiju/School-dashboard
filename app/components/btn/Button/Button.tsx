import { cn } from '@/utills/cn'
import React from 'react'

interface buttonProps {
    text: string,
    icon?: React.ReactNode
    custom_css?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ text = 'click here', icon,  onClick , custom_css}: buttonProps) => {
    return (
        <div>
            <button onClick={onClick} className={cn(`
            px-4 py-0.5 bg-secondary  text-text
             rounded font-medium flex  items-center gap-2 hover:bg-text hover:text-secondary cursor-pointer 
             transition-all duration-300
             `,custom_css )}>{icon} {text} </button>
        </div>
    )
}
