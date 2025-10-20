import React, { useId } from 'react'
interface InputBoxProps {
    label: string
    type?: string,
    placeholder?: string,
    name:string
    value: string
    onChenge: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: React.ReactNode;
    required?: boolean
}

const InputBox = ({ label, type = 'text', placeholder = 'enter value', required=false, value, onChenge, icon,name }: InputBoxProps) => {
    return (
        <div className='grid gap-2'>
            <label className='text-text' htmlFor={useId()}>
                {label}
            </label>
            <div className='flex relative  items-center   bg-transparent  '>
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    required= {required}
                    onChange={onChenge}
                    className='focus:outline-none w-full p-1 px-2 rounded-full bg-transparent  border-[1.5px] border-text/30 focus:border-text/50 peer text-text' />
                <p className=' absolute top-[50%-20px] right-2 text-sms text-text/50   peer-focus:text-primary transition-all  rounded'>{icon}</p>
            </div>
        </div>
    )
}

export default InputBox
