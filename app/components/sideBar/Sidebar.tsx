'use client'
import React, { useEffect, useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { RiMenuUnfoldFill } from 'react-icons/ri'
import RedirectLink from '../link/RedirectLink'
import { NavLinks } from '@/lib/navLinks/NavLinks'
import Image from 'next/image'
import SidebarAvatar from '../avatarinsitebar/Sidebaravatar'

interface User {
  id:number,
  name:string,
  profile_picture:string,
  role:string,
  email:string
}


const Sidebar = () => {
  const [isOpen, setOpen] = useState(false)

  const navLink = NavLinks

  const toglehandler = () => {
    setOpen(!isOpen)
  }


 

  return (
    <div className='relative col-span-12 md:col-span-2'>
      <div className=''>
        <div className={`absolute inset-0 col-span-2 md:static space-y-2 `}>
          <button onClick={toglehandler} className={`text-4xl p-2 bg-secondary  w-full  block md:hidden`}>
            {isOpen ? <MdOutlineClose />
              : <RiMenuUnfoldFill />}
          </button>
          <div className={`bg-secondary h-screen  static col-span-12 md:block ${isOpen ? 'block' : 'hidden'}`}>
            <div>
              <p className='border-b p-4 font-semibold bg-primary/30 text-text'>School Dashboard</p>
              {navLink.map((nav) => (
                <RedirectLink key={nav.id} title={nav.title} link={nav.link} icon={nav.icon} />

              ))}
            </div>
            <SidebarAvatar/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sidebar
