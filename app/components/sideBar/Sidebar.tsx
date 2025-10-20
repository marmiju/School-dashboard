'use client'
import React, { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { RiMenuUnfoldFill } from 'react-icons/ri'
import RedirectLink from '../link/RedirectLink'
import { NavLinks } from '@/lib/navLinks/NavLinks'
import LogOutButton from '../btn/LogOutButton'

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false)
  const navLink = NavLinks

  const toglehandler = () => {
    setOpen(!isOpen)
  }

  return (
    <div className='relative col-span-12 md:col-span-2'>
      <div className='border border-white'>
        <div className={`absolute inset-0 col-span-2 lg:static space-y-2 `}>
          <button onClick={toglehandler} className={`text-4xl p-2 bg-secondary  w-full  block lg:hidden`}>
            {isOpen ? <MdOutlineClose />
              : <RiMenuUnfoldFill />}
          </button>
          <div className={`bg-secondary min-h-[calc(100svh-100px)] static col-span-12 lg:block ${isOpen ? 'block' : 'hidden'}`}>
            <p className='border-b p-4 font-semibold bg-primary/30 text-text'>Menu</p>
            {navLink.map((nav) => (
              <RedirectLink key={nav.id} title={nav.title} link={nav.link} icon={nav.icon} />

            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
