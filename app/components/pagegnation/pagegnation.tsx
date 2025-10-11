'use client'
import React, {  useState } from 'react'
import { Button } from '../btn/Button/Button'
import { FcNext, FcPrevious } from 'react-icons/fc'

interface Props {
    page : number,
    handleUpdate: () => void,
    handleDowngrate: () => void
}

const Pagegnation = ({page, handleUpdate, handleDowngrate}: Props) => {


  return (
    <div className='flex justify-center my-4 w-full gap-4'>
        <Button  onClick={handleDowngrate} custom_css='bg-secondary text-primary  hover:bg-gray-100' text='previous' icon={<FcPrevious/>}/>
         <h1 className=' items-center flex'>{page.toString()}</h1>
        <Button onClick={handleUpdate} custom_css='bg-secondary text-primary flex-row-reverse hover:bg-gray-100 ' text='Next' icon={<FcNext/>}/>
    </div>
  )
}

export default Pagegnation
