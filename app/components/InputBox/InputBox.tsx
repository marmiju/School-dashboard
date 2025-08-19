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
            <label className='' htmlFor={useId()}>
                {label}
            </label>
            <div className='flex relative  items-center   bg-transparent  min-w-64 md:min-w-96 '>
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    required= {required}
                    onChange={onChenge}
                    className='focus:outline-none w-full rounded-xl bg-transparent p-2 border-[2px] border-text/50 focus:border-primary peer focus:text-primary' />
                <p className=' absolute top-[50%-20px] right-2 text-[20px] text-text/50   peer-focus:text-primary transition-all  rounded'>{icon}</p>
            </div>
        </div>
    )
}

export default InputBox
