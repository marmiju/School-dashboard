'use client'
import React, { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { RiMenuUnfoldFill } from 'react-icons/ri'
import RedirectLink from '../../link/RedirectLink'
import { NavLinks } from '@/lib/navLinks/NavLinks'

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false)
  const navLink = NavLinks

  const toglehandler = () => {
    setOpen(!isOpen)
  }

  return (
    <div className='relative col-span-12  md:col-span-2'>
      <div className={`absolute inset-0 md:static space-y-2 `}>
        <button onClick={toglehandler} className={`text-4xl p-2 bg-secondary w-full block lg:hidden`}>
          {isOpen ? <MdOutlineClose />
            : <RiMenuUnfoldFill />}
        </button>
        <div className={`bg-secondary min-h-screen static col-span-12 lg:block ${isOpen ? 'block' : 'hidden'}`}>
          <p className='border-b p-4 font-semibold'>Menu</p>
          {navLink.map((nav)=>(
            <RedirectLink key={nav.id} title={nav.title} link={nav.link} icon={nav.icon}/>
            
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Sidebar
